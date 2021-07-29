import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import './pages.css'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function ContactM() {
    const classes = useStyles();
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [fnameError, setFnameError] = React.useState(false);
    const [lnameError, setLnameError] = React.useState(false);
    const [fnameError1, setFnameError1] = React.useState('');
    const [lnameError1, setLnameError1] = React.useState('');
    const handleChange = (event) => {
        if (event.target.name === 'fname')
        {
            setFname(event.target.value);
            if(event.target.value.length===0){
                setFnameError(true);
                setFnameError1('* First Name Required')
            }
            else  if(event.target.value.length<3){
                setFnameError(true);
                setFnameError1('* Min 3 Characters')
            }
            else{
                setFnameError(false);
                setFnameError1('Looks Good!')
            }
           
        }
           
        else if (event.target.name === 'lname')
        {
            setLname(event.target.value);
            if(event.target.value.length===0){
                setLnameError(true);
                setLnameError1('* Last Name Required')
            }
            else  if(event.target.value.length<3){
                setLnameError(true);
                setLnameError1('* Min 3 Characters')
            }
            else{
                setLnameError(false);
                setLnameError1('Looks Good!');
            }
        }
          
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
                <TextField
                    value={fname}
                    error={fnameError}
                    name="fname"
                    onChange={handleChange}
                    id="standard-error-helper-text"
                    label="Fname"
                    helperText={fnameError1}
                />
            </div>
            <div>
                <TextField
                    value={lname}
                    error={lnameError}
                    name="lname"
                    onChange={handleChange}
                    id="Lname"
                    label="LName"
                    variant="outlined"
                    helperText={lnameError1}
                />
                <TextField
                    error
                    id="filled-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="filled"
                />
            </div>
            <div>
                <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="outlined"
                />
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="outlined"
                />
            </div>
        </form>
    );
}
