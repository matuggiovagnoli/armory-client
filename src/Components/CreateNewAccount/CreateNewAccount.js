import React from 'react'
import './CreateNewAccount.css'
import {Formik, Field} from 'formik'
import { useState } from 'react'
import axios from 'axios'

const CreateNewAccount = () => {

    // hook for change pass to text
  const [showPass, setShowPass] = useState('password')
  
  
  return (
    <>
    <h1>CREATE NEW ACCOUNT</h1>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          password: '',
          email: '',
          date: 0,
          toggle: false,
        }}
        
        validate = {(valores) => {
            let errores = {};
            
            // validation of first name
            if (!valores.firstname) {
              errores.firstname = 'Please insert your first name.'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.firstname)) {
                errores.firstname = 'First name can only have leters and spaces'
            }

            // validation of last name
            if (!valores.lastname) {
              errores.lastname = 'Please insert your last name.'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastname)) {
                errores.lastname = 'Last name can only have leters and spaces.'
            }

            // validation of email
            if (!valores.email) {
              errores.email = 'Please insert your email.'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errores.email = 'Email must have this structure aaa@aaa.com'
            }

            // validation of password
            if (!valores.password) {
              errores.password = 'Please insert your password.'
            } else if (!/^[a-zA-Z0-9\_\-]{4,16}$/.test(valores.password)) {
                errores.password = 'Password must have at least 4 characters, can only use letters, numbres, "-" and "_".'
            }

            // validation confirmpassword with password
            if (valores.confirmpassword !== valores.password) {
              errores.confirmpassword = 'Password must be equals'
            }

            if (valores.toggle === true) {
              setShowPass('text')
            }else {
              setShowPass('password')
            }

            if (valores.date === 0) {
              errores.date = 'Select your date of birth'
            }

            return errores;
        }} 
        onSubmit={(valores, {resetForm}) => {
          // resetForm funcion de formik para resetear el formulario
          resetForm();
          // Send information to the db using axios
          axios.post("http://localhost:3001/User/register", {
            firstname: valores.firstname,
            lastname: valores.lastname,
            dateofbirth: valores.date,
            email: valores.email,
            password: valores.password
          }).then(() => {
            console.log("succes");
          })
        }}
      >
        {({handleSubmit,values,handleChange,handleBlur,errors, touched}) => (
          <form className='UserForm' onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
              <div className='label_input_box'>
                <div className='label_input'>
                  <label>First Name </label>
                  <Field 
                    type='text' 
                    id='firstname' 
                    name='firstname'
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                  </Field>
                  {touched.firstname && errors.firstname && <p className='error_messege'>{errors.firstname}</p>}
                </div>
                <div className='label_input'>
                  <label>Last Name </label>
                  <Field 
                    type='text' 
                    id='lastname' 
                    name='lastname'
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                  </Field>
                  {touched.lastname && errors.lastname && <p className='error_messege'>{errors.lastname}</p>}
                </div>
                <div className='label_input'>
                  <label>Date of Birth </label>
                  <Field 
                    type='date' 
                    id='date' 
                    name='date'
                    value={values.date}
                    >
                  </Field>
                  {touched.date && errors.date && <p className='error_messege'>{errors.date}</p>}
                </div>
              </div>
            <h2>Sing-In Information</h2>
              <div className='label_input_box'>
                <div className='label_input'>
                  <label>Email </label>
                  <Field 
                    type='email' 
                    id='email' 
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                  </Field>
                  {touched.email && errors.email && <p className='error_messege'>{errors.email}</p>}
                </div>
                <div className='label_input'>
                  <label>Password </label>
                  <Field 
                      type={showPass}
                      id='password' 
                      name='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                  </Field>
                  {touched.password && errors.password && <p className='error_messege'>{errors.password}</p>}
                </div>
                <div className='label_input'>
                  <label>Confirm Pasword </label>
                  <Field
                    type={showPass} 
                    id='confirmpassword' 
                    name='confirmpassword'
                    value={values.confirmpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                  </Field>
                  {touched.confirmpassword && errors.confirmpassword && <p className='error_messege'>{errors.confirmpassword}</p>}
                </div>
              </div>
              <div className='label_input_checkbox'>
                <Field 
                type='checkbox'
                name='toggle'
                className='checkbox_input'
                >
                </Field>
                <label className='label_checkbox'>Show Password</label>
              </div>
            <button type='submit'>CREATE AN ACCOUNT</button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default CreateNewAccount