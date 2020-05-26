const padTiles = (buff, where = 1) => {

  switch (where) {
    case 'upper':
      buff.push('FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FE FF FE FE FE FE FE FE FE FE FE FE\n', 'FF FF FF FF 1C FF 3E 1C 0C 1C 04 0C 0C 04 24 04\n', 'FF FF FF FF 63 FF 07 63 43 23 63 3F 02 62 02 62\n', 'FF FF FF FF FF FF FF FF FF FF F7 FE 03 01 11 00\n', 'FF FF FF FF FF FF 8F FF 47 8F 05 03 00 8E C8 8C\n', 'FF FF FF FF FF FF FF FF FF FF 7F 9F 0E 04 E0 46\n', 'FF FF FF FF FF FF FF FF FF FF E7 FF 41 03 21 01\n', 'FF FF FF FF F8 FF F0 F8 F0 F8 E0 F8 C0 80 18 00\n', 'FF FF FF FF FF FF 7F FF 7E FF 6D F3 61 C0 44 8C\n', 'FF FF FF FF BF FF BF 1F 5F 0F 0F 1F 9F FF 3F 7F\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FE FE FE FE FE FE FE FE FE FE FF FF FF FF FF FF\n', '24 10 30 10 30 18 3C 18 18 3C FF FF FF FF FF FF\n', '02 62 02 62 02 62 42 22 02 62 FF FF FF FF FF FF\n', '19 30 19 30 19 30 19 30 11 38 FF FF FF FF FF FF\n', '4C 88 4C 88 4C 88 48 8C CC 8E FF FF FF FF FF FF\n', '06 00 FA 04 7A E4 A2 44 06 0C FF FF FF FF FF FF\n', '20 31 21 30 20 31 21 31 61 31 FF FF FF FF FF FF\n', '00 18 00 18 00 18 98 00 C0 80 FF FF FF FF FF FF\n', '04 8C 84 0C 04 8C 48 84 61 C0 FF FF FF FF FF FF\n', '7F 3F 7F 3F 7F 3F 3F 7F 7F FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n');
      break;
    case 'lower':
      buff.push('FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FE FF FC FE FC F8 F9 F1 E3 F3\n', 'FF FF FF FF FF FF 77 8F 0E 07 87 7E FC FE FE FC\n', 'FF FF FF FF FF FF BF 7E 3C 3E 1E 3C 18 3C 18 3C\n', 'FF FF FF FF FF FF 77 FB F1 73 61 73 21 63 20 43\n', 'FF FF FF FF FF FF 7B 87 81 03 83 3F 3F 3F 37 0F\n', 'FF FF FF FF FF FF BB C7 C3 83 D9 83 C1 9B 82 83\n', 'FF FF FF FF FF FF DE E3 C3 80 25 98 19 3C 78 3C\n', 'FF FF FF FF FF FF BB 7D 71 39 03 33 23 87 CF 87\n', 'FF FF AF D5 FB D5 FB D5 FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'E3 F3 F7 E3 E3 F3 F0 F3 F0 F8 FA FC FF FF FF FF\n', 'F9 FC 9C 08 88 18 5B 91 03 13 07 33 FF FF FF FF\n', '3D 98 3A 19 93 19 D1 93 C3 93 A7 D3 FF FF FF FF\n', '48 03 18 0B 80 1B B3 18 33 B8 B1 FA FF FF FF FF\n', '0F 07 37 0F 3F 7F 03 7F 01 03 07 03 FF FF FF FF\n', '83 82 38 91 3C 99 A8 11 01 03 8B 07 FF FF FF FF\n', '79 3C 7D 38 78 39 4B 31 81 03 CB 87 FF FF FF FF\n', '8F CF 8F DF CF 9F CF 9F CF 9F FF 9F FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n');
      break;
    case 'left':
    case 'right':
      buff.push('FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n', 'FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\n');
      break;
    default:
      break;
  }
};

const transformSav = (raw) => {

  const data = Buffer.from(raw);
  const transformed = [];

  transformed.push('!{"command":"INIT"}\n');
  transformed.push('!{"command":"DATA","compressed":0,"more":1}\n');
  padTiles(transformed, 'upper');

  for (let i = 8192; i < 130560; i += 1) {
    if (i % 4096 === 3584) {
      padTiles(transformed, 'upper');
    }

    if (i % 4096 <= 3583) {

      if (i % 256 === 0) {
        padTiles(transformed, 'left');
      }

      transformed.push(data[i].toString(16).padStart(2, '0'));

      if (i % 16 === 15) {
        transformed.push('\n');
      } else {
        transformed.push(' ');
      }

      if (i % 256 === 255) {
        padTiles(transformed, 'right');
      }
    }

    if (i % 4096 === 3583) {
      padTiles(transformed, 'lower');
      transformed.push('!{"command":"DATA","compressed":0,"more":0}\n');
      transformed.push('!{"command":"PRNT","sheets":1,"margin_upper":1,"margin_lower":3,"pallet":228,"density":64 }\n');
    }
  }

  return transformed.join('');

};

export default transformSav;
