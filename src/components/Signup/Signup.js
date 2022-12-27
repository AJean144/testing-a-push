import { useState } from 'react';
import { StyledSignup, SignupForm } from '../styles/Signup/Signup';

const Signup = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 'email',
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter email',
      errorMessage: 'Should be a valid email',
      required: true,
    },
    {
      id: 'password',
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter password',
      errorMessage: 'Password should be 3-20 Characters',
      pattern: '^[A-Za-z0-9]{3,20}$',
      required: true,
    },
    {
      id: 'passwordConfirmation',
      label: 'Confirm Password',
      name: 'passwordConfirmation',
      type: 'password',
      placeholder: 'Confirm password',
      errorMessage: 'Passwords do not match',
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <StyledSignup>
      <SignupForm id='form'>
        <h2>Register with Us</h2>
        <div>
          {inputs.map(
            ({ id, label, name, type, errorMessage, placeholder, pattern }) => (
              <div key={id}>
                <label htmlFor='email'>{label}</label>
                <input
                  onChange={handleInputChange}
                  value={values[name]}
                  name={name}
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  pattern={pattern}
                />
                <span>{errorMessage}</span>
              </div>
            )
          )}
        </div>
        <button>Submit</button>
      </SignupForm>
    </StyledSignup>
  );
};

export default Signup;