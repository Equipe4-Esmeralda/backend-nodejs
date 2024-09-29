import express from 'express';
import * as enderecoController from './enderecoController'; 

const router = express.Router();

router.post('/', enderecoController.create);
router.get('/:id', (req, res, next) => { 
    enderecoController.getById(req, res).catch(next); 
});
router.get('/', enderecoController.getAll);
router.put('/:id', (req, res, next) => { 
    enderecoController.update(req, res).catch(next); 
});
router.delete('/:id', (req, res, next) => { 
    enderecoController.deleteById(req, res).catch(next);
}); 

export default router;