import express from 'express';
import path from 'path';

// Import your route modules
import unidadeHospitalarRoutes from './unidadehospitalar/unidadeHospitalarRoutes';
import enderecoRoutes from './endereco/enderecoRoutes'; 
import medicamentoRoutes from './medicamento/medicamentoRoutes';
import medicoRoutes from './medico/medicoRoutes';
import pacienteRoutes from './paciente/pacienteRoutes';
import transferenciaRoutes from './transferencia/transferenciaRoutes'; 
import solicitacaoRoutes from './solicitacao/solicitacaoRoutes'; 
import authRoutes from './auth/authRoutes';

const router = express.Router();

// API Routes - remove '/api' prefix since it's already handled in server.ts
router.use('/unidades-hospitalares', unidadeHospitalarRoutes);
router.use('/enderecos', enderecoRoutes);
router.use('/medicamentos', medicamentoRoutes);
router.use('/medicos', medicoRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/transferencias', transferenciaRoutes);
router.use('/solicitacoes', solicitacaoRoutes);
router.use('/auth', authRoutes);

// Remove static file handling from routes as it's now handled in server.ts
// Remove root path handling as it's now handled in server.ts

export default router;