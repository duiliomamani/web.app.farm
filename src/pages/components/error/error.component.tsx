import { Button, Card, Container } from 'react-bootstrap';
import { useRouteError, useNavigate } from 'react-router-dom';
import LayoutBase from '../../shared/layout/layout.base';

import bgPlant from '../../../assets/images/bg-plant.jpg';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    const returnTo = () => {
        navigate('/');
    }

    return (
        <LayoutBase className='d-flex justify-content-center align-items-center bg-plant bg-blur'>
            <Container key='error' fluid className='text-center d-flex justify-content-center u-non-blur' >
                <Card className='shadow-lg border-0'>
                    <Card.Body>
                        <Card.Text className='py-3 text-center'>
                            <h1 className='display-5 fw-bold'>404</h1>
                            <h1 className='display-6 fw-bold'>Page not found</h1>
                            <p className='lead mb-4'>Sorry, we can't find the page you're looking for. </p>
                        </Card.Text>
                        <Button variant='primary' onClick={() => returnTo()}>Go to page home</Button>
                    </Card.Body>
                </Card>
            </Container>
        </LayoutBase>
    );
}
export default ErrorPage;