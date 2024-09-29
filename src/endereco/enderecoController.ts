import { Request, Response } from 'express';
import * as enderecoService from './enderecoService'; 

export const create = async (req: Request, res: Response) => {
    try {
        const newEndereco = await enderecoService.createEndereco(req.body);
        res.status(201).json(newEndereco);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const endereco = await enderecoService.getEnderecoById(req.params.id);
        if (!endereco) {
            return res.status(404).json({ error: 'Endereco not found' });
        }
        res.json(endereco);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAll = async (req: Request, res: Response) => {
    try {
        const enderecos = await enderecoService.getAllEnderecos();
        res.json(enderecos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const updatedEndereco = await enderecoService.updateEndereco(req.params.id, req.body);
        if (!updatedEndereco) {
            return res.status(404).json({ error: 'Endereco not found' });
        }
        res.json(updatedEndereco);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteById = async (req: Request, res: Response) => {
    try {
        const deletedEndereco = await enderecoService.deleteEndereco(req.params.id);
        if (!deletedEndereco) {
            return res.status(404).json({ error: 'Endereco not found' });
        }
        res.json({ message: 'Endereco deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};