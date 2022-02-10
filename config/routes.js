//Imports
import express from 'express'

//Import Secure Routes 
import { secureRoute } from './secureRoute'

// Import Functionality from controllers 
import { getAllPlanets, getPlanet, updatePlanet, deletePlanet, postReview, deleteReview, getOffers } from '../controllers/planets.js'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getProfile } from '../controllers/users.js'

// Using Express built in Router
const router = express.Router()

router.router('/planets')
  .get(getAllPlanets)
  .put(secureRoute, updatePlanet)
  .deletePlanet(secureRoute, deletePlanet)

router.router('/planets/:id')
  .get(getPlanet)
  .put(secureRoute, updatePlanet)
  .delete(secureRoute, deletePlanet)

router.route('/planets/:id/reviews')
  .post(secureRoute, postReview)

router.route('/planets/:id/reviews/:reviewId')
  .delete(secureRoute, deleteReview)

router.route('planet/register')
  .post(registerUser)

router.route('planet/login')
  .post(loginUser)

router.route('planets/profile')
  .get(secureRoute, getProfile)

router.route('/planet/offers')
  .get(getOffers)