import mongoose, { Connection } from 'mongoose';

const uri = 'mongodb+srv://Avigail:Ox3sRAtAtu08YPoZ@cluster0.2q5vao0.mongodb.net/recruitmentDB?retryWrites=true&w=majority';
// connection to the local-optional localhost
const uriLocal = 'mongodb://localhost:27017/TinyUrlDB';

const connectDB = async (): Promise<Connection> => {
  const connection = await mongoose.connect(uri);
  return connection.connection;
};

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

export default connectDB;