import express from 'express';
import * as medicoController from './medicoController'; 

const router = express.Router();

router.post('/', medicoController.create);
router.get('/:id', (req, res, next) => { 
    medicoController.getById(req, res).catch(next); 
});
router.get('/', medicoController.getAll);
router.put('/:id', (req, res, next) => { 
    medicoController.update(req, res).catch(next); 
});
router.delete('/:id', (req, res, next) => { 
    medicoController.deleteById(req, res).catch(next);
}); 

export default router;