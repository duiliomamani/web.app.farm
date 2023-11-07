import { FC, ReactElement } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string,
    icon: IconProp,
    className?: string,
}

const LoginButton: FC<Props> = (props) : ReactElement => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/auth/sign-in");
  }
  
  return <Button type="button" variant="outline-success" className={props.className} onClick={handleClick}><FontAwesomeIcon icon={props.icon} /> {props.title}</Button>;
};

export default LoginButton;