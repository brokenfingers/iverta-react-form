import Button from "./Button"
import Card from "./Card"
import classes from './ErrorModal.module.css'
import ReactDom from 'react-dom'

export interface ErrorProps extends BackdropInterface  {
    title: string;
    message: string
}

interface BackdropInterface {
    onConfirm?: () => void;
}
const Backdrop = (props: BackdropInterface) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props: ErrorProps) => {
return  <Card className={classes.modal}>
            <header>
                <h2 className={classes.header}>
                    {
                        props.title
                    }
                </h2>
                <div className={classes.content}>
                    <p>
                        {
                            props.message
                        }
                    </p>
                </div>
                <footer className={classes.actions}>
                    <Button type='button' onClick={props.onConfirm}>Okay</Button>
                </footer>
            </header>
        </Card>
}

const ErrorModal = (props: ErrorProps) => {

    return <>
                {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root') as HTMLElement)}
                {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root') as HTMLElement)}
            </>
}

export default ErrorModal