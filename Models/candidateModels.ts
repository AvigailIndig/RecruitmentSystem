import mongoose, { Document } from "mongoose";

enum Degree {
  BACHELORS = "bachelors",
  MASTERS = "masters",
  PHD = "phd"
}

interface ICandidate extends Document {
  name: string;
  degree: Degree;
  experience: string;
  email: string;
  phone: string;
  resumeUrl: string;
}

const candidateSchema = new mongoose.Schema<ICandidate>({
  name: { type: String, required: true },
  degree: { type: String, enum: Object.values(Degree), required: true },
  experience: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email address!`,
    },
  },
  phone: { type: String, required: true },
  resumeUrl: { type: String, required: true }
});

export default mongoose.model<ICandidate>("Candidate", candidateSchema);