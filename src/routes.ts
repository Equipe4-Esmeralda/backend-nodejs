import express from 'express';

// Import your route modules
import unidadeHospitalarRoutes from './unidadehospitalar/unidadeHospitalarRoutes';
import enderecoRoutes from './endereco/enderecoRoutes'; 
import medicamentoRoutes from './medicamento/medicamentoRoutes';
import medicoRoutes from './medico/medicoRoutes';
import pacienteRoutes from './paciente/pacienteRoutes';
import transferenciaRoutes from './transferencia/transferenciaRoutes'; 
import solicitacaoRoutes from './solicitacao/solicitacaoRoutes'; 


const router = express.Router();

router.use('/unidades-hospitalares', unidadeHospitalarRoutes);
router.use('/enderecos', enderecoRoutes);
router.use('/medicamentos', medicamentoRoutes);
router.use('/medicos', medicoRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/transferencias', transferenciaRoutes);
router.use('/solicitacoes', solicitacaoRoutes);

export default router;