import express from 'express'

import jobsController from '../Controllers/jobsController';

const router = express.Router();

router.post('/', jobsController.add);
router.put('/', jobsController.update);
router.delete('/:id', jobsController.delete);
router.get('/:id', jobsController.getById);
router.get('/', jobsController.getAllJobs);

export default router;
