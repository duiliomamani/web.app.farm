import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactElement, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { ToastPosition } from 'react-bootstrap/esm/ToastContainer';
import ReactDOM from 'react-dom';

interface ToastProps {
    id?: string,
    position: ToastPosition,
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | undefined,
    title?: string,
    description: string,
    icon: JSX.Element,
    duration?: number
}

const Toaster: FC<ToastProps> = (props: ToastProps): ReactElement => {
    const [show, setShow] = useState(true);

    const toogleShow = () => { setShow(!show); }
    return (
        <Toast show={show} onClose={toogleShow} className='text-white border-0'
            bg={props.variant} delay={props.duration} autohide>
            <Toast.Header>
                <strong className="me-auto">{props.icon} {props.title}</strong>
            </Toast.Header>
            <Toast.Body>
                {props.description}
            </Toast.Body>
        </Toast>
    );
}


class ToastManager {
    private containerRef: HTMLDivElement;
    private toasts: ToastProps[] = [];

    constructor() {
        const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
        const toastContainer = document.createElement("div") as HTMLDivElement;
        toastContainer.id = "toast-container-main";
        body.insertAdjacentElement("beforeend", toastContainer);
        this.containerRef = toastContainer;
    }

    public show(options: ToastProps): void {
        const toastId = Math.random().toString(36).substr(2, 9);
        const toast: ToastProps = {
            id: toastId,
            ...options, // if id is passed within options, it will overwrite the auto-generated one
        };

        this.toasts = [toast, ...this.toasts];
        this.render(toast);
    }

    // public destroy(id: string): void {
    //     this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
    //     this.render();
    // }

    public destroyAll(): void {
        this.toasts = [];
    }
    private render(toast: ToastProps) {
        return ReactDOM.render(
            this._renderContainer(toast),
            this.containerRef,
        );
    }

    private _getContainerPlacementPosition(position: ToastPosition, toastsList: any) {
        return <ToastContainer className="p-3" position={position}>{toastsList}</ToastContainer>
    }
    private _renderContainer(toast: ToastProps) {
        const toastsList = this.toasts.filter(x => x.position == toast.position).map((toastProps: ToastProps) => (
            <Toaster key={toastProps.id} {...toastProps} />
        ));

        return this._getContainerPlacementPosition(toast.position, toastsList);
    }
}

export const ToastMNG = new ToastManager();

const ShowOKMessage = (description: string, title: string = '', position: any = 'top-start', duration: number = 3000) => {
    ToastMNG.show({
        variant: 'success',
        description: description,
        title: title,
        position: position,
        duration: duration,
        icon: <FontAwesomeIcon icon={["fas", "circle-check"]} />
    });
}
const ShowERRORMessage = (description: string, title: string = '', position: any = 'top-start', duration: number = 3000) => {
    ToastMNG.show({
        variant: 'danger',
        description: description,
        title: title,
        position: position,
        duration: duration,
        icon: <FontAwesomeIcon icon={["fas", "circle-exclamation"]} />
    });
}
const ShowINFOMessage = (description: string, title: string = '', position: any = 'top-start', duration: number = 3000) => {
    ToastMNG.show({
        variant: 'info',
        description: description,
        title: title,
        position: position,
        duration: duration,
        icon: <FontAwesomeIcon icon={["fas", "circle-info"]} />
    });
}
const ShowWARNINGMessage = (description: string, title: string = '', position: any = 'top-start', duration: number = 3000) => {
    ToastMNG.show({
        variant: 'warning',
        description: description,
        title: title,
        position: position,
        duration: duration,
        icon: <FontAwesomeIcon icon={["fas", "triangle-exclamation"]} />
    });

}
export const ToasterNotification = {
    Toaster,
    ShowOKMessage,
    ShowERRORMessage,
    ShowINFOMessage,
    ShowWARNINGMessage
}