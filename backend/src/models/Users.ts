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
  birth: {
    type: Date,
    required: true
  },
  cpf: {
    type: String,
    required: true
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
    nationality: {
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
  emergency_phone:{
    type: String
  },
  website: {
    type: String
  },
  company: {
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
