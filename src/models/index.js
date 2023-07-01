// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Nota } = initSchema(schema);

export {
  Nota
};