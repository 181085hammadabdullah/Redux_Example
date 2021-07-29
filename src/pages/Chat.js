import React, { Component, useState, useEffect } from 'react'
import io from "socket.io-client";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Chat = () => {
  
   const socket = io('http://localhost:4000');

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const onChange = (e) => {
        setMessage(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            message: message
        }
        socket.emit('message', data);
    }
    useEffect(() => {
        socket.on('new message', (data) => {
            console.log(data);
            setMessages(data);
        })
    }, []);

    return (
        <div className="offset-md-5">
            <h1>Chat Page</h1>
            <br />
            <form
                className="needs-validation"
                onSubmit={onSubmit}
                noValidate
                autoComplete="off"
            >
                <div>

                    <TextField
                        label="Name"
                        value={message}
                        name="message"
                        id="standard-start-adornment1"
                        onChange={onChange}
                    />
                </div>
                <br />
                <Button variant="contained" color="secondary" type="submit">
                    Register
                        </Button>
            </form>
            <br />
            <div>

            </div>
        </div>


    )

}

export default Chat
