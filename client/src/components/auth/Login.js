import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Bootstrap 
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {

  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  const [ formError, setFormError ] = useState('')

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
    setFormError('')
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('planets-token', token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // prevent reload
    try {
      const { data } = await axios.post('api/planets/login', formData)
      // Redirect using the navigate variable, passing in the route we want to redirect to
      console.log('token', data.token)
      setTokenToLocalStorage(data.token) // Set token to local storage
      navigate('/') // Navigating back to homepage
    } catch (err) {
      console.log(err.response)
      setFormError(err.response.data.message)
    }
  }

  return (
    <div className="form-page">
      <Container>
        <Form onSubmit={handleSubmit} className='mt-4'>
          <h2>Login</h2>
          <div className='wrapper'>
          <Form.Group className='mb-2'>
            <Form.Label htmlFor='email'>Email Address</Form.Label>
            <Form.Control onChange={handleChange} type="email" name="email" placeholder='Email' defaultValue={formData.email} />
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control onChange={handleChange} type="password" name="password" placeholder='Password' defaultValue={formData.password} />
          </Form.Group>
          { formError && <Form.Text>{formError}</Form.Text> }
          <Form.Group className='mt-4 text-center'>
            <Button variant="info" className='button' type="submit">Log in</Button>
          </Form.Group>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default Login