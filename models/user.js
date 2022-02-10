// Imports
import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

// Schema 
const { Schema } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true, maxlength: 40 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

// Hide Password when pulling out user information for reviews 
userSchema.set('toJSON', {
  transform(_doc, json){
    delete json.password
    return json
  },
})

// Creating Password Confirmation Virtual Field 
userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

// Creating WishList Virtual Field
userSchema
  .virtual('wishList', {
    ref: 'Planet',
    localField: '_id',
    foreignField: 'owner',
  })

// Methods of pre()

// Pre Validate 
userSchema
  .pre('validate', function(next){
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Password does no Match')
    } 
    next()
  })

// Pre Save
userSchema
  .pre('save', function(next){
    if (this.isModified('password')){
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

// Unique Validator 
userSchema.plugin(uniqueValidator)

// Decrypt Password and Validate 
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

// Define and export the Model 
export default mongoose.model('User', userSchema)
