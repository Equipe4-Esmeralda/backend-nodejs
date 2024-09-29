import express from 'express';
import * as pacienteController from './pacienteController'; 

const router = express.Router();

router.post('/', pacienteController.create);
router.get('/:id', (req, res, next) => { 
    pacienteController.getById(req, res).catch(next); 
});
router.get('/', pacienteController.getAll);
router.put('/:id', (req, res, next) => { 
    pacienteController.update(req, res).catch(next); 
});
router.delete('/:id', (req, res, next) => { 
    pacienteController.deleteById(req, res).catch(next);
}); 

export default router;