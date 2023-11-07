import { FC, ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useAuth } from '../hooks/useAuth.hook';

interface Props {
    title: string,
    icon: IconProp,
    className?: string,
}

const LogoutButton: FC<Props> = ({ title, icon, className }): ReactElement => {
    const auth = useAuth();
    
    const handleClick = () => {
        auth?.signout();
    }
    return <Button type='button' size='sm' variant='danger' className={className} onClick={handleClick}><FontAwesomeIcon icon={icon} /> {title}</Button>;
};

export default LogoutButton;