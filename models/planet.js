import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'


//Schema

const { Schema } = mongoose

const reviewSchema = new Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

// planet schema
const planetSchema = new Schema({
  name: { type: String, required: true, unique: true },
  planetPosition: { type: Number, unique: true },
  planetOverview: { type: String, required: true },
  alienLife: { type: String },
  cryoSleepRequired: { type: String },
  lightYearsFromEarth: { type: String },
  distanceFromEarth: { type: String },
  travelTime: { type: String, required: true },
  temperature: { type: String, required: true },
  dangerLevel: { type: Number, required: true },
  holidayType: { type: String },
  thingsToDo: [{ type: String }],
  // images: [{ type: Image }], Need to Further look into Adding img in schema
  offers: [{ type: String }],
  reviews: [reviewSchema],
  moons: [{ type: String }],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  isReal: { type: Boolean, required: true },
  image: { type: String },
  imageGallery: [{ type: String }],
})

// virtual average rating field
planetSchema.virtual('avgRating')
  .get(function(){
    if (!this.reviews.length) return 'Not rated yet'
    const sum = this.reviews.reduce((acc, review) => {
      return acc + review.rating
    }, 0)
    return  (sum / this.reviews.length).toFixed(2)
  })
planetSchema.set('toJSON', {
  virtuals: true,
})


// Plugins
planetSchema.plugin(uniqueValidator)


export default mongoose.model('Planet', planetSchema)