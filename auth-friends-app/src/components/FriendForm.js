import React, { useState } from 'react'
import { axiosWithAuth } from './../utils/axiosWithAuth';


const initialState = {
    name: '',
    age: '',
    email: ''
}
const FriendForm = (props) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e) => {
        const value = e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        })
    }
    const handleSubmit = (e) => {
        const newFriend = { ...formValues };
        e.preventDefault();
        console.log(props.setFriends)
        axiosWithAuth()
            .post('/friends', newFriend)
            .then((res) => {

                props.setFriends(res.data)
                setFormValues(initialState)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder='Enter friend name'
                />
                <label>Age</label>
                <input
                    type='text'
                    name='age'
                    value={formValues.age}
                    onChange={handleChange}
                    placeholder='Enter friend age'
                />
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder='Enter friend email'
                />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default FriendForm