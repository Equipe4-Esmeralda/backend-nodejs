import express from 'express';
import * as unidadeHospitalarController from './unidadeHospitalarController';

const router = express.Router();

router.post('/', unidadeHospitalarController.create);
router.get('/:id', (req, res, next) => {unidadeHospitalarController.getById(req, res).catch(next);});
router.get('/', unidadeHospitalarController.getAll);
router.put('/:id', (req, res, next) => { unidadeHospitalarController.update(req, res).catch(next);});
router.delete('/:id', (req, res, next) => { unidadeHospitalarController.deleteById(req, res).catch(next);});

export default router;