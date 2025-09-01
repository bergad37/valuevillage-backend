// src/controllers/userController.js
import { Request, Response } from 'express';
import propertyService from '../services/propertyService';

const getAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await propertyService.getAllProperties();
    res.json({
      data: properties,
      success: true,
      mesage: 'Properties list have been fetched successfully',
    });
  } catch (error: any) {
    res.status(500).json({ error: `Failed to fetch properties ${error.message}` });
  }
};

const addProperty = async (req: Request, res: Response) => {
  try {
    const newProperty = await propertyService.createProperty(req.body);
    res
      .status(201)
      .json({ data: newProperty, success: true, message: 'Property saved  successfully' });
  } catch (error) {
console.log('error', error);
    res.status(400).json({ error: 'Failed to create property' });
  }
};

const fetchPropertyById = async (req: Request, res: Response) => {
  try {
    const property = await propertyService.getPropertyById(req.params.id);
    if (property) {
      res.json({ data: property, success: true });
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
};

const patchProperty = async (req: Request, res: Response) => {
  try {
    const updatedPropertyd = await propertyService.updateProperty(req.params.id, req.body);
    res.json({ data: updatedPropertyd, success: true });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update property' });
  }
};

const removeProperty = async (req: Request, res: Response) => {
  try {
    const propertyDeleted = await propertyService.deleteProperty(req.params.id);
    res.status(204).send({ success: propertyDeleted });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete property' });
  }
};

export default { getAllProperties, addProperty, fetchPropertyById, patchProperty, removeProperty };
