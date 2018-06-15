import { model, Schema } from 'mongoose';

// tslint:disable object-literal-sort-keys
const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    default: '',
    required: true
  },
  lastName: {
    type: String,
    default: '',
    required: true
  },
  username: {
    type: String,
    default: '',
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    default: '',
    required: true
  },
  password: {
    type: String,
    default: '',
    required: true
  }
});

export default model('User', UserSchema);