// Imports Model
import Planet from '../models/planet.js'

// Get all the Planet 
export const getAllPlanets = async (req, res) => {
  try {
    const allPlanets = await Planet.find().populate('owner').populate('reviews').populate('reviews.owner')
    return res.status(200).json(allPlanets)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: error.message })
  }
}

// Get a single Planet
export const getPlanet = async (req, res) => {
  try {
    const { id } = req.params
    const getPlanet = await Planet.findById(id).populate('owner').populate('reviews').populate('reviews.owner')
    return res.status(200).json(getPlanet)
  } catch (error) {
    return res.status(404).json({ message: 'Planet not Found' })
  }
}

// Add a Planet for the SuperUser 
export const addPlanet = async (req, res) => {
  try {
    const addPlanet = await Planet.create(req.body)
    return res.status(201).json(addPlanet)
  } catch (error) {
    return res.status(404).json({ message: error }) 
  }
}

// Delete a Planet for the SuperUser 

export const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params
    const planetToDelete = await Planet.findById(id)
    if  (!planetToDelete.owner.equals(req.currentUser.id)) throw new Error('Unauthorised')
    await planetToDelete.remove()
    return res.status(204).json({ message: 'Sucessfully Deleted' })
  } catch (error) {
    return res.status(404).json({ message: 'Delete Subject Not Found' })
  }
}

// Update a Planet for the SuperUser

export const updatePlanet = async (req, res) => {
  try {
    const { id } = req.params
    const planetToUpdate = await Planet.findById(id)
    if (!planetToUpdate.owner.equals(req.currentUser._id)) throw new Error('Unauthorised')
    Object.assign(planetToUpdate, req.body)
    await planetToUpdate.save()
    return res.status(200).json({ message: 'Planet Info Updated' })
  } catch (error) {
    return res.status(404).json({ message: 'Target Planet Not Found' })
  }
}

// Review Controllers
// Post a Review

export const postReview = async (req, res) => {
  try {
    const { id } = req.params
    const targetPlanet = await Planet.findById(id)
    if (!targetPlanet) throw new Error('Planet not Found')
    const newReview = { ...req.body, owner: req.currentUser._id }
    targetPlanet.reviews.push(newReview)
    await targetPlanet.save()
    return res.status(201).json(targetPlanet)
  } catch (error) {
    return res.status(422).json({ message: error.message })
  }
}

//Delete a Review by the owner

export const deleteReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params
    const targetPlanet = await Planet.findById(id)
    if (!targetPlanet) throw new Error('Target Planet not found')
    const reviewtoDelete = targetPlanet.review.id(reviewId)
    if (!reviewtoDelete) throw new Error('Unauthorised')
    await reviewtoDelete.remove()
    await targetPlanet.save()
    return res.status(204)

  } catch (error) {
    return res.status(404).json({ message: error })
  }
} 

export const getOffers = async (req, res) => {
  try {
    const allPlanets = await Planet.find()
    const allOffers = allPlanets.map(planet => {
      return planet.offers
    } )
    return res.status(200).json(allOffers)
    
  } catch (error) {
    return res.status(404).json({ message: 'Offers not Found' })
  }
}

export const addWishList = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
  } catch (error) {
    return res.status(404).json({ message: 'WishList Invalid' })
  }
}