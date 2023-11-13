import { set } from 'mongoose';
import { useState } from 'react';

export const validateEmail = (email) => {
  if (email === '') return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const nameValidation = (name) => {
  if (name === '') return true;
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regName.test(name)
}

export const useNameValidation = () => {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const handleNameChange = (event) => {
    const nameInput = event.target.value;
    setName(nameInput);
    setIsValidName(validateName(nameInput))
  }
  return { name, isValidName, handleNameChange }
};


export const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setIsValidEmail(validateEmail(emailInput));
  };

  return { email, isValidEmail, handleEmailChange };
};


