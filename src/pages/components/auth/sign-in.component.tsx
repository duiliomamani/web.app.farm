import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactElement, useState } from 'react';
import { Button, Card, Col, Container, FloatingLabel, Form, Image, InputGroup, Row } from 'react-bootstrap';
import LayoutBase from '../../shared/layout/layout.base';

import logo from '../../../assets/images/logo-plant.png';

import { Navigate } from 'react-router-dom';
import { useForm } from '../../shared/hooks/useForm.hook';
import { useAuth } from '../../shared/hooks/useAuth.hook';


const SignIn: FC = (): ReactElement => {
    const auth = useAuth();
    const [showPassowrd, setShowPassword] = useState<string>('password');

    const handleClick = () => {
        setShowPassword(showPassowrd === 'text' ? 'password' : 'text');
    };

    const handleSubmit = () => {
        auth?.signin(values, '/dashboard');
    };

    const { onChange, onSubmit, values } = useForm(
        handleSubmit,
        {
            email: '',
            password: '',
        }
    );

    if (auth?.isAuthenticated) {
        return <Navigate to='/dashboard'></Navigate>
    }

    return (<LayoutBase className='d-flex justify-content-center align-items-center bg-tractor'>
        <Container key='login-page'>
            <Row>
                <Col md={8} lg={6}>
                    <Card className='shadow-lg border-0'>
                        <Card.Body>
                            <div className='text-center py-2'>
                                <Image src={logo} alt='' fluid className='d-inline-block align-top icon-shape' ></Image>
                                <Card.Title className='fw-bold fs-2' >Bienvenido</Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>Company Cactus Tech Code</Card.Subtitle>
                            </div>
                            <Form onSubmit={onSubmit}>
                                <FloatingLabel controlId='in-email' label='Correo electrónico' className='mb-3' >
                                    <Form.Control type='email' required
                                        name='email' placeholder='name@example.com'
                                        onChange={onChange} />
                                </FloatingLabel>
                                <InputGroup className='mb-3'>
                                    <FloatingLabel controlId='in-password' label='Contraseña'>
                                        <Form.Control type={showPassowrd} required
                                            name='password' placeholder='***********'
                                            onChange={onChange} className='border-end-0' />

                                    </FloatingLabel>
                                    <InputGroup.Text id='addon-show-password' className='bg-white border-start-0 shadow-none is-valid' onClick={handleClick} >
                                        <FontAwesomeIcon icon={showPassowrd === 'text' ? 'eye-slash' : 'eye'} />
                                    </InputGroup.Text>
                                </InputGroup>
                                <div className='d-flex justify-content-start my-3'>
                                    <Form.Text className='forgot-password'>
                                        <a href='/forgot-password'>¿Olvidó su contraseña?</a>
                                    </Form.Text>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Button variant='outline-success' type='submit'
                                        disabled={auth?.isLoading}>
                                        {auth?.isLoading ? 'Ingresando...' : ' Iniciar Sesión'}
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <Card.Footer className='bg-white'>
                            <div className='d-flex justify-content-center'>
                                <Form.Text className='sign-up'>
                                    <a href='/sign-up'>¿Nuevo en FarmApp? Registrarme</a>
                                </Form.Text>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </LayoutBase>);
};

export default SignIn;