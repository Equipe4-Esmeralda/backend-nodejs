import express from 'express';
import * as solicitacaoController from './solicitacaoController'; 

const router = express.Router();

router.post('/', solicitacaoController.create);
router.get('/:id', (req, res, next) => { 
    solicitacaoController.getById(req, res).catch(next); 
});
router.get('/', solicitacaoController.getAll);
router.put('/:id', (req, res, next) => { 
    solicitacaoController.update(req, res).catch(next); 
});
router.delete('/:id', (req, res, next) => { 
    solicitacaoController.deleteById(req, res).catch(next);
}); 

export default router;