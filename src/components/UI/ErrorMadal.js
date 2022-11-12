import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = props => {
    return (
        <div className={classes.patent}>
            <div className={classes.backdrop} onClick={props.action}>

            </div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={classes.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={classes.actions}>
                    <Button type={props.type} action={props.action}>Okay</Button>
                </footer>

            </Card>
        </div>
    )
}

export default ErrorModal;