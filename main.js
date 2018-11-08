const Mali = require('mali');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, 'league_of_legends.proto');
const URL = '127.0.0.1:50051';
const CHAMPIONS = [
  {champion_id: 1, type: 3, name: 'Akali', message: 'If you look dangerous, you better be dangerous.'},
  {champion_id: 2, type: 2, name: 'Kennen', message: 'The Heart of the Tempest beats eternal...and those beaten remember eternally.'},
];

async function listChampion(ctx) {
  console.log('request: ListChampions');
  console.dir(ctx.metadata, { depth: 3, colors: true });

  ctx.res = {champions: CHAMPIONS};

  console.log(`response: ${JSON.stringify(CHAMPIONS)}`);
}

function main () {
  const app = new Mali(PROTO_PATH);
  app.use({listChampion});
  app.start(URL);
  console.log(`LoL service running on ${URL}`);
}

main();
