import React from 'react';
import Layout from '../../components/Layout';
import { Container , Form , Row, Col , Button} from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';

const Signin = (props) => {

  const dispatch = useDispatch();

  const userLogin = (e) => {

    e.preventDefault();
    // To prevent default reloading of web pages after clicking submit button

    const user = {
      email : "raj@gmail.com",
      password : "password"
    }

    dispatch(login(user));
    // login(user);
  }


  return (
    <Layout>
      <Container>
        <Row style={{marginTop : '50px'}}>
          <Col md={{span:6 , offset:3}}>
            <Form onSubmit={userLogin}>
              <Input 
                label="Email address" 
                placeholder="Enter email" 
                type="email" 
                value="" 
                onChange={() => {}} 
              />

              <Input 
                label="Password" 
                placeholder="Enter Password" 
                type="password" 
                value="" 
                onChange={() => {}} 
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
            
      </Container>
    </Layout>
  )
}

export default Signin