export default [
  {
    id: 'int01',
    name: 'GameBoy / Nintendo',
    get: () => (import(/* webpackChunkName: "f/i01" */ './int/01').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int02',
    name: 'Dashed on white',
    get: () => (import(/* webpackChunkName: "f/i02" */ './int/02').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int03',
    name: 'Marbled',
    get: () => (import(/* webpackChunkName: "f/i03" */ './int/03').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int04',
    name: 'Film Strip',
    get: () => (import(/* webpackChunkName: "f/i04" */ './int/04').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int05',
    name: 'Picture Frame',
    get: () => (import(/* webpackChunkName: "f/i05" */ './int/05').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int06',
    name: 'Squiggles',
    get: () => (import(/* webpackChunkName: "f/i06" */ './int/06').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int07',
    name: 'Diamonds',
    get: () => (import(/* webpackChunkName: "f/i07" */ './int/07').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int08',
    name: 'X-Mas',
    get: () => (import(/* webpackChunkName: "f/i08" */ './int/08').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int09',
    name: 'Caution / Nintendo',
    get: () => (import(/* webpackChunkName: "f/i09" */ './int/09').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int10',
    name: 'Bricks',
    get: () => (import(/* webpackChunkName: "f/i10" */ './int/10').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int11',
    name: 'Meandering Line',
    get: () => (import(/* webpackChunkName: "f/i11" */ './int/11').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int12',
    name: 'Television',
    get: () => (import(/* webpackChunkName: "f/i12" */ './int/12').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int13',
    name: 'White',
    get: () => (import(/* webpackChunkName: "f/i13" */ './int/13').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int14',
    name: 'Black',
    get: () => (import(/* webpackChunkName: "f/i14" */ './int/14').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int15',
    name: 'Postage Stamp',
    get: () => (import(/* webpackChunkName: "f/i15" */ './int/15').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int16',
    name: 'Kitty and flowers',
    get: () => (import(/* webpackChunkName: "f/i16" */ './int/16').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int17',
    name: 'Plaid',
    get: () => (import(/* webpackChunkName: "f/i17" */ './int/17').then(({ default: frame }) => (frame))),
  },
  {
    id: 'int18',
    name: 'Pattern',
    get: () => (import(/* webpackChunkName: "f/i18" */ './int/18').then(({ default: frame }) => (frame))),
  },
  {
    id: 'jp01',
    name: 'Pocket Camera (JP/default)',
    get: () => (import(/* webpackChunkName: "f/j01" */ './jp/01').then(({ default: frame }) => (frame))),
  },
  {
    id: 'jp02',
    name: 'Round White (JP)',
    get: () => (import(/* webpackChunkName: "f/j02" */ './jp/02').then(({ default: frame }) => (frame))),
  },
  {
    id: 'jp07',
    name: 'Nintendo Pocket Camera (JP)',
    get: () => (import(/* webpackChunkName: "f/j07" */ './jp/07').then(({ default: frame }) => (frame))),
  },
  {
    id: 'jp09',
    name: 'Caution / Nintendo (JP)',
    get: () => (import(/* webpackChunkName: "f/j09" */ './jp/09').then(({ default: frame }) => (frame))),
  },
];
