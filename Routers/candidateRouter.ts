import express from 'express'

import candidatesController from '../Controllers/candidateController';

const router = express.Router();

router.post('/', candidatesController.add);
router.put('/', candidatesController.update);
router.delete('/:id', candidatesController.delete);
router.get('/:id', candidatesController.getById);
router.get('/', candidatesController.getAllCandidates);

export default router;
