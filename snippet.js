  var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  const TABLE_ARRAY = [...TABLE];

  const MAPPED = {};
  for (var i = 0; i < TABLE_ARRAY.length; i++) {
    MAPPED[TABLE_ARRAY[i]] = i;
  }


  export const decode = (input) => {

    var length = input.length;
    if (length % 4 == 0) {
      input = input.replace(/==?$/, '');
      length = input.length;
    }

    var bitCounter = 0;
    var bitStorage;
    var buffer;
    const output = [];
    var position = -1;

    while (++position < length) {
      buffer = MAPPED[input.charAt(position)];
      bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
      // Unless this is the first of a group of 4 characters…
      if (bitCounter++ % 4) {
        // …convert the first 8 bits to a single ASCII character.
        output.push(
          0xFF & bitStorage >> (-2 * bitCounter & 6)
        );
      }
    }
    return output;
  };
