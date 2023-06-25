
import { Request, Response } from 'express';
import candidateModel from '../Models/candidateModels';
import axios from 'axios'


const candidatesController = {

  add: async (req: Request, res: Response) => {
    const candidate = req.body;
    try {
      if (!(await checkPhone(candidate.phone))) {
            return res.status(400).json({ message: 'Invalid phone number' });
          }
      const newCandidate = await candidateModel.create(candidate);
      res.json(newCandidate);
    } catch (error:any) {
      res.status(400).json({ message: error.message});
    }
  },

  update: async (req: Request, res: Response) => {
    const candidate = req.body;
    try {
        if(candidate.phone!==(candidate)(await candidateModel.findById(candidate._id)).phone)  //if the user updates his phone
        {
          if (!(await checkPhone(candidate.phone))) {
            return res.status(400).json({ message: 'Invalid phone number' });
          }
        }
      const updated = await candidateModel.findOneAndUpdate(
        { _id: candidate._id },
        req.body,
        { new: true }
      );
      if (!updated) {
        return res.status(404).json({ error: 'candidate not found' });
      }
      res.json(updated);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const deleted = await candidateModel.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'candidate not found' });
      }
      res.json(deleted);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const candidate = await candidateModel.findById(req.params.id);
      if (!candidate) {
        return res.status(404).json({ error: 'candidate not found' });
      }
      res.json(candidate);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllCandidates: async (req: Request, res: Response) => {
    try {
      const candidates = await candidateModel.find();
      res.json(candidates);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },
};

async function checkPhone(phone:string) {
    const response = await axios.get(`http://apilayer.net/api/validate?access_key=ca067a6ce4094377f6acaef0afefe633&number=${phone}&country_code=IL&format=1`);
    const { valid, international_format } = response.data;
    console.log(response.data)
    console.log(valid)
    return valid;
  }

export default candidatesController;


