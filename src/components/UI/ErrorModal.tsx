import Button from "./Button"
import Card from "./Card"
import classes from './ErrorModal.module.css'

export interface ErrorProps {
    title: string;
    message: string
    onConfirm?: () => void;
}
const ErrorModal = (props: ErrorProps) => {

    return <>
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
        <Card className={classes.modal}>
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
    </>
}

export default ErrorModal