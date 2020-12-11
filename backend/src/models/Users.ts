import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zip_code: {
      type: String,
      required: true
    },
    geo: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    }
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  Company: {
    name: {
      type: String
    },
    catchPhrase: {
      type: String
    },
    bs: {
      type: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.plugin(mongoosePaginate)
mongoose.model('Users', UserSchema)
