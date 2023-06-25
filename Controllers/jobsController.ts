
import { Request, Response } from 'express';
import jobsModel from '../Models/jobsModels';


const jobsController = {
    
  add: async (req: Request, res: Response) => {
    const job = req.body;
    try {
      const newJob = await jobsModel.create(job);
      res.json(newJob);
    } catch (error:any) {
      res.status(400).json({message: error.message});
    }
  },

  update: async (req: Request, res: Response) => {
    const job = req.body;
    try {
      const updated = await jobsModel.findOneAndUpdate(
        { _id: job._id },
        req.body,
        { new: true }
      );
      if (!updated) {
        return res.status(404).json({ error: 'job not found' });
      }
      res.json(updated);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const deleted = await jobsModel.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'job not found' });
      }
      res.json(deleted);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const job = await jobsModel.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ error: 'job not found' });
      }
      res.json(job);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllJobs: async (req: Request, res: Response) => {
    try {
      const jobs = await jobsModel.find();
      res.json(jobs);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default jobsController;


