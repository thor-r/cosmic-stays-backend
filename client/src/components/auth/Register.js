import React, { useState } from 'react'
import axios from 'axios' 

// useNavigate allows us to redirect users to different routes the React way (no reload)
import { useNavigate } from 'react-router-dom'

// Import Bootstrap Components
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => {

  // navigate
  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [ formErrors, setFormErrors ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // this prevents reload
    try {
      await axios.post('/api/planets/register', formData)
      navigate('/login')
    } catch (err) {
      setFormErrors(err.response.data.message)
    }
  }

  return (
    <div className="form-page">
      <Container>
        <Form onSubmit={handleSubmit} className='mt-4'>
          <h2>Register</h2>
          <div className='wrapper'>
          {/* Username */}
          <Form.Group className='mb-2'>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control onChange={handleChange} type="text" name="username" placeholder="Username" value={formData.username} />
            {formErrors.username && <Form.Text> {formErrors.username} </Form.Text>}
          </Form.Group>
          {/* Email */}
          <Form.Group className='mb-2'>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control onChange={handleChange} type="email" name="email" placeholder="Email" value={formData.email} />
            {formErrors.email && <Form.Text>{formErrors.email}</Form.Text>}
          </Form.Group>
          {/* Password */}
          <Form.Group className='mb-2'>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" value={formData.password} />
            {formErrors.password && <Form.Text>{formErrors.password}</Form.Text>}
          </Form.Group>
          {/* Password Confirmation */}
          <Form.Group className='mb-2'>
            <Form.Label htmlFor="passwordConfirmation">Confirm Password</Form.Label>
            <Form.Control onChange={handleChange} type="password" name="passwordConfirmation" placeholder="Confirm Password" value={formData.passwordConfirmation} />
            {formErrors.passwordConfirmation && <Form.Text>{formErrors.passwordConfirmation}</Form.Text>}
          </Form.Group>
          {/* Submit */}
          <Form.Group className='text-center mt-4'>
            <Button variant="info" className='button' type="submit">Submit</Button>
          </Form.Group>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default Register