const upper = [
  '7F FF BF C0 C0 A0 CF 90 D0 8F D4 8F D3 8F D3 8F',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FF FF FF 00 00 00 FF 00 00 FF 00 FF FF FF FF FF',
  'FE FF FD 03 01 07 F1 0F 09 F7 19 E7 F9 C7 D9 C7',
  'D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F',
  '80 FF 40 FF 20 FF 0F F0 17 E8 1C E7 1A E7 19 E7',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF 00 FF 00 FF FF 00 FF 00 00 FF 00 FF FF FF',
  '01 FF 02 FF 04 FF FC 0F EC 1F 2C FF 6C DF EC 9F',
  '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7',
];

const lower = [
  'D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F',
  '19 E7 19 E7 1B E6 1C E7 1F EF 1F FF 20 FF 40 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'FF FF FF 00 FF 00 00 FF FF FF FF FF 00 FF 00 FF',
  'EC 9F AC 5F CC 3F 1C FF FC FF FC FF 02 FF 01 FF',
  '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7',
  'D3 8F D1 8E D0 8C D7 88 CF 90 E0 BF C0 FF 7F FF',
  '80 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  '00 FF FF 00 00 00 FF 00 FF 00 00 FF 00 FF FF FF',
  'D9 C7 99 47 19 27 E9 17 F1 0F 05 FF 03 FF FE FF',
];

const left = [
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
  ['D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F D3 8F', '19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7 19 E7'],
];

const right = [
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
  ['EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F EC 9F', '59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7 59 C7'],
];

export default {
  upper,
  lower,
  left,
  right,
};
