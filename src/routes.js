import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* Rota de criação de usuário */
routes.post('/users', UserController.store);

/* Rota de login */
routes.post('/sessions', SessionController.store);

/* Middleware de authentication */
routes.use(authMiddleware);

/* Rota de edição de dados de login */
routes.put('/users', UserController.update);

export default routes;
