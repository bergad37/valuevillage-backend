import { errorHandler } from "./middleware/errorHandler";
import express from 'express';
import cors from 'cors';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';


const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Swagger setup (TypeScript object)
import swaggerDocument from './swagger';
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Register all routes
app.use('/', routes);

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
