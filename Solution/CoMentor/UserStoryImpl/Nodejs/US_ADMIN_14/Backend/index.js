const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const Connection = require('./connectivity/db');
const RolesRepository = require('./repositories/rolesRepository');
const RolesService = require('./services/rolesServices');
const RolesController = require('./controllers/rolesController');
const rolesRouter = require('./routers/rolesRouter');
const errorHandler = require('./middlewares/errorHandler');

// Dependency injection setup
const repo = new RolesRepository(Connection);
const service = new RolesService(repo, Connection);
const controller = new RolesController(service);
const router = rolesRouter(controller);

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());

app.use(['/api', '/api/v1'], router);
app.use(errorHandler);

const PORT = process.env.PORT || 3898;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});