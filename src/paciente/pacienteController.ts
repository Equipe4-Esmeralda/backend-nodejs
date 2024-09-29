import { Request, Response } from 'express';
import * as pacienteService from './pacienteService'; 

export const create = async (req: Request, res: Response) => {
  try {
    const newPaciente = await pacienteService.createPaciente(req.body);
    res.status(201).json(newPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const paciente = await pacienteService.getPacienteById(req.params.id);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const pacientes = await pacienteService.getAllPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedPaciente = await pacienteService.updatePaciente(req.params.id, req.body);
    if (!updatedPaciente) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    res.json(updatedPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const deletedPaciente = await pacienteService.deletePaciente(req.params.id);
    if (!deletedPaciente) {
      return res.status(404).json({ error: 'Paciente not found' });
    }
    res.json({ message: 'Paciente deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};