
const upper = [
  '07 07 1C 1C 30 30 60 60 40 40 C0 C0 80 80 80 80',
  'FF FF 00 00 00 00 FF FF 00 00 FF FF 00 00 FF FF',
  'FF FF 00 00 00 00 FF FF 00 00 FF FF 00 00 FF FF',
  'FF FF 00 00 00 00 FF FF 00 00 FF FF 00 00 FF FF',
  'FF FF 00 00 00 00 FC FC 00 00 FC FC 00 00 FC FC',
  'FF FF 00 00 00 00 01 00 00 01 00 00 00 00 00 00',
  'FF FF 00 00 00 00 FE FF FF FE 00 00 00 00 00 00',
  'FF FF 00 00 00 00 3F 1F 1F 3F 00 00 00 00 00 00',
  'FF FF 00 00 00 00 38 9C 9C 38 70 38 38 70 E7 73',
  'FF FF 00 00 00 00 7F 3F 3F 7F 00 00 00 00 FF FF',
  'FF FF 00 00 00 00 87 C3 C3 87 00 00 00 00 C0 E0',
  'FF FF 00 00 00 00 E7 F3 F3 E7 0E 07 07 0E 1C 0E',
  'FF FF 00 00 00 00 1C 8E 8E 1C 38 1C 1C 38 7F 3F',
  'FF FF 00 00 00 00 D8 6C 6C D8 90 D8 00 00 CF C7',
  'FF FF 00 00 00 00 00 00 00 00 00 00 00 00 FC FE',
  'FF FF 00 00 00 00 3F 3F 00 00 3F 3F 00 00 3F 3F',
  'FF FF 00 00 00 00 FF FF 00 00 FF FF 00 00 FF FF',
  'FF FF 00 00 00 00 FF FF 00 00 FF FF 00 00 FF FF',
  'FF FF 00 00 00 00 FF FF 00 00 FF FF 00 00 FF FF',
  'F0 F0 1C 1C 06 06 02 02 03 03 01 01 01 01 01 01',
  '80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80',
  '00 00 FF FF 00 00 FF FF 00 00 00 00 01 01 03 03',
  '00 00 FF FF 00 00 FF FF 00 00 00 00 FF FF FF FF',
  '00 00 FF FF 00 00 FF FF 00 00 00 00 FF FF FF FF',
  '00 00 FC FC 00 00 FC FC 00 00 00 00 FF FF FF FF',
  '00 00 00 00 00 00 7F 3F 3F 7F 00 00 FF FF FF FF',
  '00 00 00 00 00 00 F9 FC FC F9 00 00 FF FF FF FF',
  '00 00 01 00 02 01 FF FF FF FF 00 00 FF FF FF FF',
  '73 E7 C0 E0 E0 C0 80 C0 C0 80 00 00 FF FF FF FF',
  'FF FF 70 38 38 70 E0 70 70 E0 00 00 FF FF FF FF',
  'E0 C0 00 00 00 00 3F 1F 1F 3F 00 00 FF FF FF FF',
  '0E 1C 38 1C 5C 38 F1 F8 F8 F1 00 00 FF FF FF FF',
  '3F 7F E0 70 70 E0 C0 E0 E0 C0 00 00 FF FF FF FF',
  'C7 8F 00 00 00 00 00 00 00 00 00 00 FF FF FF FF',
  'FE FC 00 00 00 00 00 00 00 00 00 00 FF FF FF FF',
  '00 00 3F 3F 00 00 3F 3F 00 00 00 00 FF FF FF FF',
  '00 00 FF FF 00 00 FF FF 00 00 00 00 FF FF FF FF',
  '00 00 FF FF 00 00 FF FF 00 00 00 00 FF FF FF FF',
  '00 00 FF FF 00 00 FF FF 00 00 00 00 80 80 C0 C0',
  '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01',
];

const lower = [

  '80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80',
  '07 07 03 03 00 00 20 20 10 10 08 08 01 01 01 01',
  'FF FF FF FF 00 00 07 07 08 08 0A 0A FF FF 1F 1F',
  'FF FF FF FF 00 00 00 00 80 80 80 80 FC FC C4 C4',
  'FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00 00',
  'FF FF FF FF 00 00 00 00 03 01 01 03 7F 3F 3F 7F',
  'FF FF FF FF 00 00 0F 0F 9B DB F6 B6 FD FC F8 F1',
  'FF FF FF FF 00 00 00 00 E0 70 70 E0 FF FF FF FF',
  'FF FF FF FF 00 00 00 00 00 00 00 00 C0 E0 E0 C0',
  'FF FF FF FF 00 00 00 00 01 00 00 01 03 01 01 03',
  'FF FF FF FF 00 00 00 00 E0 E0 E0 C0 80 C0 C0 80',
  'FF FF FF FF 00 00 00 00 0E 07 07 0E 1C 0E 0E 1C',
  'FF FF FF FF 00 00 00 00 00 00 1E 0E 0F 07 07 03',
  'FF FF FF FF 00 00 00 00 00 00 18 3C 30 78 60 F0',
  'FF FF FF FF 00 00 00 00 00 00 7F 3F 3F 7F 00 00',
  'FF FF FF FF 00 00 00 00 00 00 C0 E0 E0 C0 00 00',
  'FF FF FF FF 00 00 00 00 01 01 01 01 3F 3F 23 23',
  'FF FF FF FF 00 00 E0 E0 10 10 50 50 FF FF F8 F8',
  'E0 E0 C0 C0 00 00 04 04 08 08 10 10 80 80 80 80',
  '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01',
  '80 80 80 80 C0 C0 40 40 60 60 30 30 1C 1C 07 07',
  'F9 F9 01 01 01 01 09 09 11 11 21 21 00 00 FF FF',
  '38 F8 37 F3 37 F7 37 F7 18 18 FF FF 00 00 FF FF',
  'CC FC 4C 7C 4C 7C 4C 7C C4 C4 FC FC 00 00 FF FF',
  '00 00 00 00 03 01 01 03 07 03 03 07 00 00 FF FF',
  '0E 07 07 0E 9C CE CE 9C 39 9C 9D 39 00 00 FF FF',
  '03 01 01 03 F0 70 F0 E0 E0 E0 E0 C0 00 00 FF FF',
  '9C CE CE 9C 38 1C 1C 38 70 38 38 70 00 00 FF FF',
  '36 1B 1B 36 6C 36 37 6D 03 03 07 07 00 00 FF FF',
  '07 03 03 07 EE E7 C7 CE 9C 8E 0E 1C 00 00 FF FF',
  'F9 FC FC F9 00 00 00 00 00 00 00 00 00 00 FF FF',
  'FF FF FF FF 33 39 31 73 67 73 63 E7 00 00 FF FF',
  'C3 E1 E3 C1 87 C3 C7 87 0E 8F 8C 0E 00 00 FF FF',
  'C0 E0 F0 F1 F8 B8 3C 1C 00 00 00 00 00 00 FF FF',
  'FF FF FF FF 07 03 03 07 0E 07 07 0E 00 00 FF FF',
  '80 C0 C0 80 00 80 80 00 00 00 00 00 00 00 FF FF',
  '27 3F 26 3E 26 3E 26 3E 23 23 3F 3F 00 00 FF FF',
  '19 1F E9 6F E9 EF E9 EF 18 18 FF FF 00 00 FF FF',
  '9F 9F 80 80 80 80 90 90 88 88 84 84 00 00 FF FF',
  '01 01 01 01 03 03 02 02 06 06 0C 0C 38 38 E0 E0',
];

const left = [
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
  ['80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80', '07 07 07 07 07 07 07 07 07 07 07 07 07 07 07 07'],
];

const right = [
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
  ['E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0 E0', '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'],
];

export default {
  upper,
  lower,
  left,
  right,
};
