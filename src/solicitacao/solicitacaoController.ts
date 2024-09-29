import { Request, Response } from 'express';
import * as solicitacaoService from './solicitacaoService';

export const create = async (req: Request, res: Response) => {
  try {
    const newSolicitacao = await solicitacaoService.createSolicitacao(req.body);
    res.status(201).json(newSolicitacao);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const solicitacao = await solicitacaoService.getSolicitacaoById(req.params.id);
    if (!solicitacao) {
      return res.status(404).json({ error: 'Solicitacao not found' });
    }
    res.json(solicitacao);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const solicitacoes = await solicitacaoService.getAllSolicitacoes();
    res.json(solicitacoes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedSolicitacao = await solicitacaoService.updateSolicitacao(req.params.id, req.body);
    if (!updatedSolicitacao) {
      return res.status(404).json({ error: 'Solicitacao not found' });
    }
    res.json(updatedSolicitacao);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const deletedSolicitacao = await solicitacaoService.deleteSolicitacao(req.params.id);
    if (!deletedSolicitacao) {
      return res.status(404).json({ error: 'Solicitacao not found' });
    }
    res.json({ message: 'Solicitacao deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};