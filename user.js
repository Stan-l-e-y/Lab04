import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  city: {
    type: String,
    required: true,
    match: /^[A-Za-z ]+$/,
  },
  website: {
    type: String,
    required: true,
    match: /^(http|https):\/\/[^ "]+$/,
  },
  zip: {
    type: String,
    required: true,
    match: /^\d{5}-\d{4}$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d-\d{3}-\d{3}-\d{4}$/,
  }
});

export const User = model('User', UserSchema);
