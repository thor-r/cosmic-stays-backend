//Imports
import express from 'express'

//Import Secure Routes 
import { secureRoute } from './secureRoute.js'

// Import Functionality from controllers 
import { getAllPlanets, getPlanet, updatePlanet, deletePlanet, postReview, deleteReview, getOffers, addWishList } from '../controllers/planets.js'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getProfile } from '../controllers/users.js'

// Using Express built in Router
const router = express.Router()

router.route('/planets')
  .get(getAllPlanets)
  .put(secureRoute, updatePlanet)
  .delete(secureRoute, deletePlanet)

router.route('/planets/register')
  .post(registerUser)

router.route('/planets/login')
  .post(loginUser)

router.route('/planets/:id')
  .get(getPlanet)
  .put(secureRoute, updatePlanet)
  .delete(secureRoute, deletePlanet)
  .post(addWishList)

router.route('/planets/:id/reviews')
  .post(secureRoute, postReview)

router.route('/planets/:id/reviews/:reviewId')
  .delete(secureRoute, deleteReview)

router.route('/profile')
  .get(secureRoute, getProfile)

router.route('/offers')  
  .get(getOffers)

export default router