import mongoose from 'mongoose';

export default function isValidIdentity(id) {
    return mongoose.Types.ObjectId.isValid(id);
}
