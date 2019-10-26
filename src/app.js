import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    // Toda vez que a classe é chamada/instanciada o contructor será chamado
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Realizar requisiçõesc com o express no formato JSON
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
