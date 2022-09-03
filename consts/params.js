
export const CarSetupParams = [
  {
    // name: "Ângulo de Asa Dianteira",
    name: "Ângulo Dianteiro",
    index: 0,
    min: 0,
    max: 10,
    step: 0.5,
    decimals: 1,
    effect: [99/32, (-3)/8, (-3)/2, 9/32, (-115)/64],
    render: x => x.toFixed(1),
  },
  {
    // name: "Ângulo da Asa Traseira",
    name: "Ângulo Traseiro",
    index: 1,
    min: 9,
    max: 16,
    step: 0.5,
    decimals: 1,
    effect: [(-11)/32, 1/24, 1/6, (-1)/32, (-175)/192],
    render: x => x.toFixed(1),
  },
  {
    name: "Distribuição Antirrolagem",
    index: 2,
    min: 1,
    max: 9,
    step: 1,
    decimals: 0,
    effect: [7/16, 1/4, 1, 37/16, 25/32],
    render: x => {
      if (Math.abs(Math.round(x) - x) < 1e-6) {
        return `${(10-x).toFixed(0)}:${x.toFixed(0)}`
      }
      return `${(10-x).toFixed(2)}:${x.toFixed(2)}`
    },
  },
  {
    name: "Cambagem dos Pneus",
    index: 3,
    min: 2.7,
    max: 3.5,
    step: 0.05,
    decimals: 2,
    effect: [(-53)/16, 23/12, 23/3, 17/16, 415/96],
    render: x => `-${x.toFixed(2)}°`,
  },
  {
    name: "Ângulo",
    index: 4,
    min: 0,
    max: 1,
    step: 0.05,
    decimals: 2,
    effect: [(-33)/32, 163/24, 43/6, (-3)/32, 755/192],
    render: x => `${x.toFixed(2)}°`,
  },
];


export const BiasParams = [
  {
    name: "Sair de Traseira",
    index: 0,
    offset: 0.5,
    effect: [0.4, -0.4, -0.1, 0.1, 0],
    render: x => x.toFixed(3),
  },
  {
    // name: "Estabilidade de frenagem",
    name: "Frenagem",
    index: 1,
    offset: 0.45,
    effect: [-0.2, 0.2, 0.15, -0.25, 0.2],
    render: x => x.toFixed(3),
  },
  {
    name: "Curvas",
    index: 2,
    offset: 0.2,
    effect: [0.3, 0.25, -0.15, 0.25, -0.05],
    render: x => x.toFixed(3),
  },
  {
    name: "Tração",
    index: 3,
    offset: 0.25,
    effect: [-0.15, 0.25, 0.5, -0.1, 0],
    render: x => x.toFixed(3),
  },
  {
    name: "Retas",
    index: 4,
    offset: 1,
    effect: [-0.1, -0.9, 0, 0, 0],
    render: x => x.toFixed(3),
  },
];

