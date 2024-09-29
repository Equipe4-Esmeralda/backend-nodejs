import express from 'express';
import * as medicamentoController from './medicamentoController'; 

const router = express.Router();

router.post('/', medicamentoController.create);
router.get('/:id', (req, res, next) => { 
    medicamentoController.getById(req, res).catch(next); 
});
router.get('/', medicamentoController.getAll);
router.put('/:id', (req, res, next) => { 
    medicamentoController.update(req, res).catch(next); 
});
router.delete('/:id', (req, res, next) => { 
    medicamentoController.deleteById(req, res).catch(next);
}); 

export default router;