# react-native-fast-base64

## Fast base64 decoding in React Native

React Native's inability to transfer binary data from and to native Android and iOS code means most bridged data is transferred in base64.
Since React Native also doesn't include a buildin decode/encode we have to use a polyfill, which is painfully slow.

This 'polyfill' decodes base64 quickly into a Uint8Array in O(n).
It manages to do so by skipping all default base64 validation checks, a mapped table, and directly converting to byte code.

## Before you use this
Please note that this code does not validate your base64, it's meant to be a dumb and fast as possible implementation.
