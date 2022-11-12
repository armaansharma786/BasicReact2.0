import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorMadal';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [showError, setShowError]= useState();
    const addUserData = (event) => {
        event.preventDefault();
        if(!username.trim() || !age){
            setShowError({
                title: "Invalid input",
                message: "Please enter valid input"
            });
            return;
        }

        if(age < 1){
            setShowError({
                title: "Invalid age",
                message: "Please enter age greater than 0"
            });
            return;
        }
        let obj = {
            name: username,
            age: age
        }
        props.onAddUser(obj);
        setUsername('');
        setAge('');

    }
    const userNameChangeHandler = (event)=> {
        setUsername(event.target.value);
    }
    const ageChangeHandler = (event)=> {
        setAge(event.target.value);
    }
    const onOk = () => {
        setShowError(undefined);
    }
    return (
        <div>
            {showError && <ErrorModal type="button" action={onOk} title={showError.title} message={showError.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserData}>
                    <label htmlFor="name">Username</label>
                    <input id="name" type="text" name="name" onChange={userNameChangeHandler} value={username} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" name="age" onChange={ageChangeHandler} value={age} />
                    <Button action={addUserData} type="submit">Save User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;