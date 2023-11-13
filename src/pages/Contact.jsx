import { Form, Container } from "react-bulma-components";
import { useEmailValidation, useNameValidation } from "../utils/validEmail";
import './pagesCSS.css';

const Contact = () => {
  const { email, isValidEmail, handleEmailChange } = useEmailValidation();
  const { name, isValidName, handleNameChange } = useNameValidation()
  return (
    <Container>
      <div className="p-5">
        <Form.Field >
          <Form.Label className="mb-2 textColor" >Name</Form.Label>
          <Form.Control className="mb-3">
            <Form.Input
              className="is-medium"
              color={isValidName ? 'success' : 'danger'}
              onChange={handleNameChange}
              value={name}
              type="name"
              required
            />
          </Form.Control>
          {!isValidName && name !== '' && (
            <p className="help is-danger">Please enter a full name</p>
          )}

          <Form.Label className="mb-2 textColor" >Email</Form.Label>
          <Form.Control className="mb-3">
            <Form.Input
              className="is-medium"
              color={isValidEmail ? 'success' : 'danger'}
              onChange={handleEmailChange}
              value={email}
              type="email"
              required
            />
          </Form.Control>
          {!isValidEmail && email !== '' && (
            <p className="help is-danger">Invalid email address</p>
          )}

          <Form.Label className="mb-2 textColor" >Message</Form.Label>
          <Form.Control className="mb-3">
            <Form.Textarea className="is-medium"></Form.Textarea>
          </Form.Control>
          <Form.Control>
            <button type="submit" className="button is-success is-medium">Send</button>
          </Form.Control>
        </Form.Field>
      </div>
    </Container>
  );

};

export default Contact