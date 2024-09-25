import { initMongoConnection } from './db/initMongoConnection.js';
import { EventsCollection } from './db/models/event.js';
import { startServer } from './server.js';

(async () => {
  await initMongoConnection();
  startServer();
})();
