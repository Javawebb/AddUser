import React from 'react'
import { useState } from 'react'
import {v4} from 'uuid'
import {useDispatch} from 'react-redux'
import { createUser } from '../store/userSlice'

export const AddUser = () => {
    const [name,setName] =useState('')
    const [surname,setSurname] =useState('')
    const dispatch =useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
    
        if(!name.trim() || !surname.trim()) return

        const user = {
            name,
            surname,
            id:v4()
        };
        dispatch(createUser(user));

        setName('')
        setSurname('')
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="">
                <input value={name} onChange={(event) =>  setName(event.target.value)} type="text" placeholder='Name'/>
            </div>
            <div className="">
                <input value={surname} onChange={(event) =>  setSurname(event.target.value)} type="text" placeholder='Surname'/>
            </div>
            <button>Add User</button>
        </form>
    </div>
  )
}
