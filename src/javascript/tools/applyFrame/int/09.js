const upper = [
  'FF FF C0 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 03 01 FD 03 FD 03 FD 03 FD 03 FD 03 FD 03',
  'C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC 02 FF 03 FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 00 FF A0 9F',
  '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF',
];

const lower = [
  'C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F',
  '7D 83 3C C2 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 01 FF 01 FF 01',
  'FF FF FF 00 00 FF 7F FF 80 80 7F 00 67 00 5B 04',
  'FF FF C0 00 1F E0 FF FF 00 00 FF C6 FF E6 FF D6',
  'FF FF 07 00 FC 03 FF FF 00 00 FF C0 FF 1B FF DD',
  'FF FF FF 00 00 FF FF FF 00 00 FF 30 FF 7B FF B6',
  'FF FF C0 00 1F E0 FF FF 00 00 FF 00 FF 9B FF DD',
  'FF FF 07 00 FC 03 FF FF 00 00 FF 03 FF 03 FF 9F',
  'FF FF FF 00 00 FF FF FF 00 00 FF 00 FF 3C FF 66',
  'FF FF C0 00 1F E0 FF FF 00 00 FF C0 B3 C0 ED 02',
  'FF FF 07 00 FC 03 FE 01 FF 80 7F C0 7F C0 7F C0',
  'FF FF FF 00 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  'FF FF C0 00 1F E0 0F F0 07 F8 03 FC 01 FE 00 FF',
  'FF FF 07 00 FC 03 FE 01 FF 00 FF 00 FF 00 FF 00',
  'C0 BF C0 3F 00 FF 00 FF 00 FF 80 7F C0 3F E0 1F',
  '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF',
  'B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 C0 BF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 81 3F C1 1F E1 0F F0 07 F8 03 FC FE FF FF FF',
  '5F 04 6B 1C 7F 00 80 FF FF 7F FF 00 00 FF FF FF',
  'FF CE FF C6 FF C6 00 FF FF FF 80 7F 3F FF FF FF',
  'FF D9 FF D9 FF D9 00 FF FF FF 03 FC FE FF FF FF',
  'FF B7 FF B6 FF B3 00 FF FF FF FF 00 00 FF FF FF',
  'FF D9 FF 19 FF D9 00 FF FF FF 80 7F 3F FF FF FF',
  'FF B3 FF B3 FF 9F 00 FF FF FF 03 FC FE FF FF FF',
  'FF 66 FF 66 FF 3C 00 FF FF FF FF 00 00 FF FF FF',
  'EF 02 F5 0E FF 00 00 FF FF FF 80 7F 3F FF FF FF',
  '7F C0 7F C0 5F E0 8F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '00 FF 00 FF 00 FF 00 FF 00 FF 80 7F 3F FF FF FF',
  '7F 80 3F C0 1F E0 0F F0 07 F8 03 FC FE FF FF FF',
  'F0 0F F8 07 FC 03 FE 01 FF 00 FF 00 00 FF FF FF',
  '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F 3F FF FF FF',
];

const left = [
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
];

const right = [
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
  ['C0 BF C0 BF C0 BF C0 BF C0 BF C0 BF 80 BF A0 9F', '7D 83 3D C3 1D E3 0D F3 05 FB 01 FF 03 FF 03 FF'],
  ['B0 8F B8 87 BC 83 BE 81 BF 80 BF 80 BF 80 BF 80', '03 FF 03 FF 03 FF 03 FF 03 FF 83 7F C3 3F E3 1F'],
  ['BF 80 FF 80 DF A0 CF B0 C7 B8 C3 BC C1 BE C0 BF', 'F3 0F FB 07 FF 03 FD 03 FD 03 FD 03 FD 03 FD 03'],
];

export default {
  upper,
  lower,
  left,
  right,
};