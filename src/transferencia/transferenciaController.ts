import { Request, Response } from 'express';
import * as transferenciaService from './transferenciaService';

export const create = async (req: Request, res: Response) => {
  try {
    const newTransferencia = await transferenciaService.createTransferencia(req.body);
    res.status(201).json(newTransferencia);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const transferencia = await transferenciaService.getTransferenciaById(req.params.id);
    if (!transferencia) {
      return res.status(404).json({ error: 'Transferencia not found' });
    }
    res.json(transferencia);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const transferencias = await transferenciaService.getAllTransferencias();
    res.json(transferencias);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedTransferencia = await transferenciaService.updateTransferencia(req.params.id, req.body);
    if (!updatedTransferencia) {
      return res.status(404).json({ error: 'Transferencia not found' });
    }
    res.json(updatedTransferencia);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const deletedTransferencia = await transferenciaService.deleteTransferencia(req.params.id);
    if (!deletedTransferencia) {
      return res.status(404).json({ error: 'Transferencia not found' });
    }
    res.json({ message: 'Transferencia deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};