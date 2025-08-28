import express from 'express';

import propertyController from '../controllers/propertyController';

const router = express.Router();

router.get('/', propertyController.getAllProperties);
router.post('/', propertyController.addProperty);
router.put('/:id', propertyController.patchProperty);
router.delete('/:id', propertyController.removeProperty);

export default router;
