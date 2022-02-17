import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from './environment.js'

export const secureRoute = async (req, res, next) => {
  try {
    // console.log('headers', req.headers)

    if (!req.headers.authorization) throw new Error('Missing Header')
    
    const token = req.headers.authorization.replace('Bearer ', '')

    const payload = jwt.verify(token, secret)
    console.log(payload.sub)

    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify) throw new Error('User not found')

    req.currentUser = userToVerify

    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorised' })
  }

}