import { Request, Response } from 'express';
import * as medicoService from './medicoService'; 

export const create = async (req: Request, res: Response) => {
    try {
        const newMedico = await medicoService.createMedico(req.body);
        res.status(201).json(newMedico);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const medico = await medicoService.getMedicoById(req.params.id);
        if (!medico) {
            return res.status(404).json({ error: 'Medico not found' });
        }
        res.json(medico);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAll = async (req: Request, res: Response) => {
    try {
        const medicos = await medicoService.getAllMedicos();
        res.json(medicos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const updatedMedico = await medicoService.updateMedico(req.params.id, req.body);
        if (!updatedMedico) {
            return res.status(404).json({ error: 'Medico not found' });
        }
        res.json(updatedMedico);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteById = async (req: Request, res: Response) => {
    try {
        const deletedMedico = await medicoService.deleteMedico(req.params.id);
        if (!deletedMedico) {
            return res.status(404).json({ error: 'Medico not found' });
        }
        res.json({ message: 'Medico deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};