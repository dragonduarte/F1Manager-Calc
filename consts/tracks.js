export const tracks = [
  {name: 'Not Specified', location: '', country: '-', code: 'XX'},
  {name: 'Sakhir', location: 'Sakhir', country: 'Bahrein', code: 'BH'},
  {name: 'Jeddah', location: 'Jeddah', country: 'Arábia Saudita', code: 'SA'},
  {name: 'Melbourne', location: 'Melbourne', country: 'Austrália', code: 'AU'},
  {name: 'Imola', location: 'Imola', country: 'Itália', code: 'IT', suffix: "EMI"},
  {name: 'Miami', location: 'Miami', country: 'EUA', code: 'US', suffix: "MIAMI"},
  {name: 'Catalunya', location: 'Barcelona', country: 'Espanha', code: 'ES'},
  {name: 'Monte Carlo', location: 'Monte Carlo', country: 'Mónaco', code: 'MC'},
  {name: 'Baku', location: 'Baku', country: 'Azerbaijão', code: 'AZ'},
  {name: 'Montreal', location: 'Montreal', country: 'Canadá', code: 'CA'},
  {name: 'Silverstone', location: 'Silverstone', country: 'Reino Unido', code: 'GB'},
  {name: 'Spielberg', location: 'Spielberg', country: 'Áustria', code: 'AT'},
  {name: 'Paul Ricard', location: 'Le Castellet', country: 'França', code: 'FR'},
  {name: 'Hungaroring', location: 'Budapest', country: 'Hungria', code: 'HU'},
  {name: 'Spa-Francorchamps', location: 'Spa-Francorchamps', country: 'Bélgica', code: 'BE'},
  {name: 'Zandvoort', location: 'Zandvoort', country: 'Países Baixos', code: 'NL'},
  {name: 'Monza', location: 'Monza', country: 'Itália', code: 'IT'},
  {name: 'Marina Bay', location: 'Marina Bay', country: 'Singapura', code: 'SG'},
  {name: 'Suzuka', location: 'Suzuka', country: 'Japão', code: 'JP'},
  {name: 'Austin', location: 'Austin', country: 'EUA', code: 'US'},
  {name: 'Mexico City', location: 'Cidade do México', country: 'México', code: 'MX'},
  {name: 'Interlagos', location: 'São Paulo', country: 'Brasil', code: 'BR'},
  {name: 'Yas Marina', location: 'Ilha de Yas', country: 'EAU', code: 'AE'},
].map(x => x.suffix ? {...x, id: x.code + "-" + x.suffix} : {...x, suffix: "", id: x.code})

export const trackMap = {};
tracks.map(x => trackMap[x.id] = x);
