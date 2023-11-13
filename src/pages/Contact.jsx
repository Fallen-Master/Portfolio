import { Form, Container } from "react-bulma-components";
import useEmailValidation from "../utils/validEmail";
import './pagesCSS.css';

const Contact = () => {
  const { email, isValidEmail, handleEmailChange } = useEmailValidation();
  return (
    <Container>

    <div className="p-5">

      <Form.Field >
        <Form.Label className="mb-2 textColor" >Name</Form.Label>
        <Form.Control className="mb-3">
          <Form.Input
            color="success"
            className="is-medium"
          />
        </Form.Control>

        <Form.Label className="mb-2 textColor" >Email</Form.Label>
        <Form.Control className="mb-3">
          <Form.Input
            className="is-medium"
            color={isValidEmail ? 'success' : 'danger'}
            type="email"
            value={email}
            onChange={handleEmailChange}
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
          <button className="button is-success is-medium">Send</button>
        </Form.Control>
      </Form.Field>


    </div>
    </Container>
  );

};

export default Contact