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
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <h1>Add a new friend here!</h1>
                <div className='form-inputs'>
                    <label className='form-label'>Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder='Enter friend name'
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Age</label>
                    <input
                        className='form-input'
                        type='text'
                        name='age'
                        value={formValues.age}
                        onChange={handleChange}
                        placeholder='Enter friend age'
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder='Enter friend email'
                    />
                </div>
                <button className='form-input-btn'>Submit</button>
            </form>
        </div>
    )

}

export default FriendForm