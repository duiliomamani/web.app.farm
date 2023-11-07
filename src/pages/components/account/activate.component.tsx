import { Button, Card, Container, Image } from "react-bootstrap";
import LayoutBase from "../../../pages/shared/layout/layout.base";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgPlant from '../../../assets/images/bg-plant.jpg';
import logo from '../../../assets/images/logo-plant.png';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IdentityService } from "../../../services/auth/identity.service";
import { ToasterNotification } from "../../../pages/components/common/toaster.component";


const ActivateAccount = () => {
    let { email } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const sendEmail = async () => {
        setLoading(true);
        let data = null;

        try {
            data = await IdentityService.Verification({ email: email });
        } catch (ex: any) {
            ToasterNotification.ShowERRORMessage(ex.message, 'Ocurrio un error.');
        } finally {
            setLoading(false);
        }

        if (!loading && data.isSuccessfull) {
            ToasterNotification.ShowOKMessage('Envio de email de verificación exitoso.', 'Ejecución correcta.');
            navigate('/auth/sign-in');
        }
    }
    return <LayoutBase style={{
        backgroundImage: `url(${bgPlant})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }} className='d-flex justify-content-center align-items-center'>
        <Container key='error' fluid className='text-center d-flex justify-content-center' >
            <Card className='shadow-lg border-0'>
                <Card.Body>
                    <div className='text-center py-2'>
                        <Image src={logo} alt='' fluid className='d-inline-block align-top icon-shape' ></Image>
                        <Card.Title className='fw-bold fs-2' >Activate your account</Card.Title>
                    </div>
                    <Card.Text className='py-3 text-center'>
                        <p className='mb-4'>We just need to validate your email address to activate your account.</p>
                    </Card.Text>
                    <Button variant='primary' onClick={() => sendEmail()}><FontAwesomeIcon icon='envelope' /> <span>Send verification email</span></Button>
                </Card.Body>
            </Card>
        </Container>
    </LayoutBase>
};

export default ActivateAccount;