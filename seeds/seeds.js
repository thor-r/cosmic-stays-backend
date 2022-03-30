import mongoose from 'mongoose'
import planetData from './data/planets.js'
import userData from './data/users.js'
import { dbURI } from '../config/environment.js'
import Planet from '../models/planet.js'
import User from '../models/user.js'

const seedDatabase = async () => {
  try {
    // Connect to the database
    await mongoose.connect(dbURI)
    console.log('🚀 Database Connected')

    // Drop all data from the database
    await mongoose.connection.db.dropDatabase()
    console.log('👌 Database dropped')

    // Create users - will create as many users as added in the users.js file
    const users = await User.create(userData)

    //Loop through planetData and apply an owner field to each object with the id of the first user created above
    const planetsWithOwners = planetData.map(planet => {
      return { ...planet, owner: users[0]._id }
    })

    // Seed all the collections 
    const planetsAdded = await Planet.create(planetsWithOwners)
    console.log(`🌱 Seeded database with ${planetsAdded.length} planets`)

    // Close database connection
    await mongoose.connection.close()
    console.log('👋 Bye!')

  } catch (err) {
    console.log(err)
    await mongoose.connection.close()
  }
}
seedDatabase()