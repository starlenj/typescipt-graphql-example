import {MikroORM} from '@mikro-orm/core';

const main = async () => {
  await MikroORM.init({
    entities: [],
    clientUrl: 'mongodb://localhost:27017/todoDb',
    type: 'mongo',
  });
};

main();
