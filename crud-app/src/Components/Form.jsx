import React, { useState } from 'react';
import { Input, Box, Button } from '@chakra-ui/react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      errors.email = 'Invalid email format';
    }

    
    const phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
      errors.phone = 'Phone number should be 10 digits';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      console.log('Form submitted:', { name, email, phone });

      
      setName('');
      setEmail('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box marginTop="50px">
        
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          width="500px"
          textAlign="center"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </Box>

      <Box>
        
        <Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          width="500px"
          textAlign="center"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </Box>

      <Box>
        
        <Input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Phone No."
          width="500px"
          textAlign="center"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </Box>

      <Button type="submit">Add User</Button>
    </form>
  );
};

export default Form;
