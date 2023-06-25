
import mongoose, { Document } from "mongoose";

interface IJobs extends Document {
  name: String;
  location: String;
  jobDescription: String;
  requirements: String;
  status:Boolean;
  startDate:Date;
  image: Buffer;
}


const jobsSchema = new mongoose.Schema<IJobs>({
  name: {type:String, required:true},
  location:{type:String},
  jobDescription:{type:String, required:true},
  requirements:{type:String, required:true},
  status: {type:Boolean, required:true},
  startDate: {type:Date, required:true},
  image:{type:Buffer}
});

export default mongoose.model<IJobs>("jobs", jobsSchema);