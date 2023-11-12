import { useState } from 'react';

 export const validateEmail = (email) => {
  if (email === '' ) return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setIsValidEmail(validateEmail(emailInput));
  };

  return { email, isValidEmail, handleEmailChange };
};

export default useEmailValidation;
