import { useState, useEffect, useRef, MutableRefObject, use } from "react";
import { ToastService } from "~/services/toast.service";

const Toast = (props: {service: ToastService}) => {
    const [visible, setVisible] = useState(false);

    const [title, setTitle] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [level, setLevel] = useState<string>();

    props.service.setters(setTitle, setMessage, setLevel, setVisible);

    const toastRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        const bootstrap = require('bootstrap');

        const myToast = toastRef.current
        var bsToast = bootstrap.Toast.getInstance(myToast)

        if (!bsToast) {
            bsToast = new bootstrap.Toast(myToast, { autohide: false })
            bsToast.show()
        }
        (visible) ? bsToast.show() : bsToast.hide();
    })
    return (
        <div className={`toast bg-${level} position-fixed bottom-0 end-0 m-4`} role="alert" ref={toastRef} style={{ zIndex: 9999 }}>
            <div className="toast-header">
                <strong className="me-auto">{title}</strong>
                <button type="button" className="btn-close" onClick={() => setVisible(false)} aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {message}
            </div>
        </div>
    )
}

export default Toast;