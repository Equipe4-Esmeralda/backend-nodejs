import express from 'express';
import * as transferenciaController from './transferenciaController'; 

const router = express.Router();

router.post('/', transferenciaController.create);
router.get('/:id', (req, res, next) => { 
    transferenciaController.getById(req, res).catch(next); 
});
router.get('/', transferenciaController.getAll);
router.put('/:id', (req, res, next) => { 
    transferenciaController.update(req, res).catch(next); 
});
router.delete('/:id', (req, res, next) => { 
    transferenciaController.deleteById(req, res).catch(next);
}); 

export default router;