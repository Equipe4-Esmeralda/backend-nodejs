import { Request, Response } from 'express';
import * as medicamentoService from './medicamentoService';

export const create = async (req: Request, res: Response) => {
    try {
        const newMedicamento = await medicamentoService.createMedicamento(req.body);
        res.status(201).json(newMedicamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const medicamento = await medicamentoService.getMedicamentoById(req.params.id);
        if (!medicamento) {
            return res.status(404).json({ error: 'Medicamento not found' });
        }
        res.json(medicamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAll = async (req: Request, res: Response) => {
    try {
        const medicamentos = await medicamentoService.getAllMedicamentos();
        res.json(medicamentos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const updatedMedicamento = await medicamentoService.updateMedicamento(req.params.id, req.body);
        if (!updatedMedicamento) {
            return res.status(404).json({ error: 'Medicamento not found' });
        }
        res.json(updatedMedicamento);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteById = async (req: Request, res: Response) => {
    try {
        const deletedMedicamento = await medicamentoService.deleteMedicamento(req.params.id);
        if (!deletedMedicamento) {
            return res.status(404).json({ error: 'Medicamento not found' });
        }
        res.json({ message: 'Medicamento deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};