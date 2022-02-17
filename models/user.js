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
  virtuals: true, 
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

//Creating Review Virtual Field 
userSchema
  .virtual('reviewedPlanet', {
    ref: 'Planet', 
    localField: '_id',
    foreignField: 'reviews.owner',
    get: function(res){
      let matchedReviews = []
      if (res) {
        res.forEach(re => {
          matchedReviews = [ 
            ...matchedReviews, 
            ...re.reviews.filter(r => r.owner.equals(this._id)).map(r => {
              r._doc.planetId = re._id
              r._doc.planet = re.name
              return r
            })
          ]
        }) 
      }
      return matchedReviews
    },

    // get: function(reviewedPlanet){
    //   console.log(reviewedPlanet)
    //   return reviewedPlanet[0].reviews.filter(review => {
    //     console.log('bobs id', this._id)
    //     console.log(review.owner.equals(this._id))
    //     return review.owner.equals(this._id)
    //   })

    // get: function(res){
    //   let matchedReviews = []
    //   res.forEach(re => {
    //     matchedReviews = [ 
    //       ...matchedReviews, 
    //       ...re.reviews.filter(r => r.owner.equals(this._id)).map(r => {
    //         r._doc.planet = re._id
    //         return r
    //       })
    //     ]
    //   })
    //   return matchedReviews
    // },
  })

// Creating WishList Virtual Field
userSchema
  .virtual('wishList', {
    ref: 'Planet',
    localField: '_id',
    foreignField: 'owner',
  })

// Creating BookedTrip Virtual Field
userSchema
  .virtual('bookedTrip', {
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
