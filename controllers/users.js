import User from '../models/user.js'

// Create a controller that recieves profile information for the user making the request
export const getProfile = async (req, res) => {
  try {
    // We will use the req.currentUser to get profile info for the person making the request
    // Add the ownedPlanets into the population method to show in response
    const user = await User.findById(req.currentUser._id).populate('wishList').populate('bookedTrip').populate('reviewedPlanet')
    // Check user exists
    if (!user) throw new Error('Error: User not Found ')
    // Return user information
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}