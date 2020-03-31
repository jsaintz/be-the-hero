import  Router  from 'express';
import { index as _indexOng, create as _createOng } from './controllers/OngController';
import { indexs as _indexIncident, creat as _createIncident, del as _deleteIncident } from './controllers/IncidentController';
import { index as _indexProfile } from './controllers/ProfileController';
import { create as _create } from './controllers/SessionController';
const routes = Router();

//login
routes.post('/sessions', _create);


//Profile
routes.get('/profile', _indexProfile);

//Ongs
routes.get('/ongs', _indexOng);
routes.post('/ongs', _createOng);

//Incidents
routes.get('/incidents', _indexIncident);
routes.post('/incidents', _createIncident);
routes.del('/incidents/:id', _deleteIncident);

export default routes;