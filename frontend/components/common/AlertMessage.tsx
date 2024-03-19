'use client';

const AlertMessage = (props: any) => {
    console.log(props);
    return (
        <div className={`alert alert-warning block my-0 py-0 text-center ${(props.hidden)? 'd-none' :  ''}`} style={{ zIndex: 9999 }} role="alert">
            {props.message?.text} <button className="d-inline" onClick={props.handleAction}>
            {props.message?.action}
            </button>
        </div>
    )
}

export default AlertMessage;