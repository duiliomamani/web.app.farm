import { FC, ReactElement } from "react";
import { Spinner } from "react-bootstrap";

const Loading: FC = (): ReactElement => {
  return (<div className="position-absolute top-50 start-50 translate-middle">
    <div className="d-flex justify-content-center flex-column align-items-center">
      <Spinner animation="border" variant="dark" className="m-2"></Spinner>
      <span className="text-dark fs-4">Loading...</span>
    </div>
  </div>);
};

export default Loading;
