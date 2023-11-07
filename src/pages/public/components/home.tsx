import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row, Image, Card, Accordion } from 'react-bootstrap';

import analisysbg from '../../../assets/images/bg-analisys.jpg'
import cornbg from '../../..//assets/images/bg-plant.jpg';

const services: any = [{
    link: '#',
    title: 'Pagos en línea',
    description: 'Realiza depositos a sus empleados a través de FarmApp',
    icon: 'file-invoice-dollar',
    color: 'text-primary'
},
{
    link: '#',
    title: 'Maquinarias',
    description: 'Seguridad y monitoreo digital de las maquinarias',
    icon: 'tractor',
    color: 'text-danger'
},
{
    link: '#',
    title: 'Comunicaciones',
    description: 'Realizar avisos a sus trabajadores rurales',
    icon: 'bullhorn',
    color: 'text-info'
},
{
    link: '#',
    title: 'Campañas',
    description: 'Calendario y planificacion de cosechas / campañas',
    icon: 'wheat-awn',
    color: 'text-warning'
},
{
    link: '#',
    title: 'Proximamente',
    description: 'Una nueva funcionalidad esta por venir',
    icon: 'laptop-code',
    color: 'text-success'
},
{
    link: '#',
    title: 'Proximamente',
    description: 'Una nueva funcionalidad esta por venir',
    icon: 'laptop-code',
    color: 'text-success'
}];

const Home = () => {
    return (<>
        <Container fluid className='py-8 bg-plant bg-blur'>
            <Container id='home' key='home' className='u-non-blur'>
                <Row>
                    <Col lg={6} md={8}>
                        <h1 className='display-3 fw-bold text-black'>Farm App</h1>
                        <p className='fs-4 text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ac elit urna. Aenean quis mollis ex, eget euismod metus.
                            Phasellus condimentum velit eget risus venenatis, a eleifend velit luctus.</p>
                        <div className='d-flex justify-content-between'>
                            <a className='btn btn-dark btn-lg' href='/' role='button' aria-disabled='true'>
                                <FontAwesomeIcon icon={['fab', 'google-play']} /> Disponible en Google Play</a>
                            <a className='btn btn-dark btn-lg' href='/' role='button' aria-disabled='true'>
                                <FontAwesomeIcon icon={['fab', 'apple']} /> Obtener en AppStore</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container id='services' key='services' className='py-5 mt-lg-n8' fluid>
            <Row sm={2} md={4} lg={4} className='d-flex justify-content-center'>
                {services.map(
                    (newItem: any, index: number) => {
                        return (
                            <Col key={`services-${index}`} className='mx-3 py-4'>
                                <Card className='shadow-lg border-0'>
                                    <Card.Body className='text-center'>
                                        <div className='icon-shape'>
                                            <FontAwesomeIcon icon={newItem.icon} className={newItem.color} size='3x' />
                                        </div>
                                        <Card.Title className='fs-4 fw-bold'>{newItem.title}</Card.Title>
                                        <Card.Text className='fs-5'><small>{newItem.description}</small></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    }
                )}
            </Row>
        </Container>
        <Container id='admin' key='admin' className='py-5'>
            <Row>
                <Col lg={6} md={8}>
                    <h1 className='display-4 fw-bold'>Lorem ipsum dolor sit amet consectetur</h1>
                    <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ac elit urna. Aenean quis mollis ex, eget euismod metus.
                        Phasellus condimentum velit eget risus venenatis, a eleifend velit luctus.</p>
                    <div className='d-flex justify-content-between'>
                        <a className='btn btn-danger btn-lg' href='#' role='button'> <FontAwesomeIcon icon={['fas', 'file-contract']} /> Contratar</a>
                    </div>
                </Col>
                <Col lg={6} md={4}>
                    <Image fluid src={analisysbg}></Image>
                </Col>
            </Row>
        </Container>
        <Container id='contact' key='contact' className='py-5'>
            <Row>
                <h3 className='text-primary py-3'>
                    ¿Necesitás ponerte en contacto con nosotr@s?
                </h3>
                <Col lg={4} md={4}>
                    <Card className='border-0 shadow-lg'>
                        <Card.Body>
                            <h3 className='fw-bold text-primary'> <FontAwesomeIcon icon={['far', 'message']} /> Chat de la app</h3>
                            <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed ac elit urna. Aenean quis mollis ex, eget euismod metus.
                                Phasellus condimentum velit eget risus venenatis, a eleifend velit luctus.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4}>
                    <Card className='border-0 shadow-lg'>
                        <Card.Body>
                            <h3 className='fw-bold text-primary'> <FontAwesomeIcon icon={['fas', 'envelope-open-text']} /> E-Mail</h3>
                            <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed ac elit urna. Aenean quis mollis ex, eget euismod metus.
                                Phasellus condimentum velit eget risus venenatis, a eleifend velit luctus.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4}>
                    <Card className='border-0 shadow-lg'>
                        <Card.Body>
                            <h3 className='fw-bold text-primary'> <FontAwesomeIcon icon={['fas', 'at']} /> Redes Sociales</h3>
                            <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed ac elit urna. Aenean quis mollis ex, eget euismod metus.
                                Phasellus condimentum velit eget risus venenatis, a eleifend velit luctus.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container key='question' className='py-5'>
            <Card className='border-0 shadow-lg'>
                <Card.Body>
                    <h3>
                        <FontAwesomeIcon icon='circle-question' className='mx-2' />
                        Preguntas Frecuentes
                    </h3>
                    <Accordion flush>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Question Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Question Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Question Item #3</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>Question Item #4</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='4'>
                            <Accordion.Header>Question Item #5</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
        </Container>
    </>
    );
};

export default Home;