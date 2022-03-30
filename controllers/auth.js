// Imports from Framework
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

// Register Route

export const registerUser = async (req, res) => {
  try {
    // console.log(req.body)
    const newUser = await User.create(req.body)
    console.log(newUser)
    return res.status(202).json({ message: 'Account Registered' })
  } catch (error) {
    return res.status(422).json({ message: error })
  }
}

// Login Route 

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const userToLogin = await User.findOne({ email: email })
    if (!userToLogin || !userToLogin.validatePassword(password)) {
      return res.status(401).json({ message: 'Email and Password combination not found' })
    }  
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '30 days' })
    return res.status(200).json({ message: `Welcome back ${userToLogin.username}`, token: token })
  } catch (error) {
    return res.status(401).json(error)
  }
}