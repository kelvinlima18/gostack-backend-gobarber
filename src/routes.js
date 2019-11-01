import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import FileController from './app/controller/FileController';
import ProviderController from './app/controller/ProviderController';
import AppointmentController from './app/controller/AppointmentController';
import ScheduleController from './app/controller/ScheduleController';
import NotificationController from './app/controller/NotificationController';
import AvailableController from './app/controller/AvailableController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/* Rota de criação de usuário */
routes.post('/users', UserController.store);

/* Rota de login */
routes.post('/sessions', SessionController.store);

/* Middleware de authentication */
routes.use(authMiddleware);

/* Rota de edição de dados de login */
routes.put('/users', UserController.update);

/* Rota de listagem de prestadores */
routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

/* Rota de agendamento de serviço */
routes.post('/appointments', AppointmentController.store);

/* Rota de listagem de agendamentos */
routes.get('/appointments', AppointmentController.index);

routes.delete('/appointments/:id', AppointmentController.delete);

/* Rota de listagem de agendamentos para o prestador */
routes.get('/schedules', ScheduleController.index);

/* Rota de listagem de notificação por prestador */
routes.get('/notifications', NotificationController.index);

routes.put('/notifications/:id', NotificationController.update);

/* Rota de inserção de arquivos */
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
