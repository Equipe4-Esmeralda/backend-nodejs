import { Request, Response } from 'express';
import * as unidadeHospitalarService from './unidadeHospitalarService';

export const create = async (req: Request, res: Response) => {
  try {
    const newUnidadeHospitalar = await unidadeHospitalarService.createUnidadeHospitalar(req.body);
    res.status(201).json(newUnidadeHospitalar);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const unidadeHospitalar = await unidadeHospitalarService.getUnidadeHospitalarById(req.params.id);
    if (!unidadeHospitalar) {
      return res.status(404).json({ error: 'Unidade Hospitalar not found' });
    }
    res.json(unidadeHospitalar);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const unidadesHospitalares = await unidadeHospitalarService.getAllUnidadesHospitalares();
    res.json(unidadesHospitalares);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedUnidadeHospitalar = await unidadeHospitalarService.updateUnidadeHospitalar(req.params.id, req.body);
    if (!updatedUnidadeHospitalar) {
      return res.status(404).json({ error: 'Unidade Hospitalar not found' });
    }
    res.json(updatedUnidadeHospitalar);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const deletedUnidadeHospitalar = await unidadeHospitalarService.deleteUnidadeHospitalar(req.params.id);
    if (!deletedUnidadeHospitalar) {
      return res.status(404).json({ error: 'Unidade Hospitalar not found' });
    }
    res.json({ message: 'Unidade Hospitalar deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};