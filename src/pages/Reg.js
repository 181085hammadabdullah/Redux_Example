// import React, { Component } from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { UserReg } from '../actions/actions'
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     margin: {
//         margin: theme.spacing(1),
//     },
//     withoutLabel: {
//         marginTop: theme.spacing(3),
//     },
//     textField: {
//         width: '25ch',
//     },
// }));

// function Register() {
//     const classes = useStyles();
//     const [email, setEmail] = React.useState('');
//     const [emailE, setemailE] = React.useState(false);
//     const [emailerror, setemailerror] = React.useState('');
//     const [name, setName] = React.useState('');
//     const [nameE, setnameE] = React.useState(false);
//     const [nameerror, setnameerror] = React.useState('');
//     const [password, setpassword] = React.useState('');
//     const [passwordE, setpasswordE] = React.useState(false);
//     const [passworderror, setpassworderror] = React.useState('');
//     const [showPassword, setshowPassword] = React.useState(false);
//     const [Form, setForm] = React.useState(false);
//     const handleChange = (prop) => (event) => {

//         if (event.target.name === 'email') {
//             var regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             setEmail(event.target.value);

//             if (event.target.value.length === 0) {
//                 setemailE(true);
//                 setemailerror('* Email Required')
//                 setForm(false);
//             }
//             else if (regex.test(event.target.value) === false) {
//                 setemailE(true);
//                 setForm(false);
//                 setemailerror('* Invalid Email')
//             }
//             else {
//                 setemailE(false);
//                 setemailerror('Looks good!')
//                 setForm(true);
//             }
//         }
//         if (event.target.name === 'password') {
//             setpassword(event.target.value);
//             if (event.target.value.length === 0) {
//                 setpasswordE(true);
//                 setForm(false);
//                 setpassworderror('* Password Required')
//             }
//             else if (event.target.value.length < 6) {
//                 setpasswordE(true);
//                 setForm(false);
//                 setpassworderror('* Min 6 Characters')
//             }
//             else {
//                 setpasswordE(false);
//                 setpassworderror('Looks good!');
//                 setForm(true);
//             }
//         }
//         if (event.target.name === 'name') {
//             setName(event.target.value);
//             if (event.target.value.length === 0) {
//                 setnameE(true);
//                 setForm(false);
//                 setnameerror('* Name Required')
//             }
//             else if (event.target.value.length < 6) {
//                 setnameE(true);
//                 setForm(false);
//                 setnameerror('* Min 3 Characters')
//             }
//             else {
//                 setnameE(false);
//                 setnameerror('Looks good!');
//                 setForm(true);
//             }
//         }

//     };

//     const handleClickShowPassword = () => {
//         setshowPassword(!showPassword);
//     };

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };
//     const submitHandler = event => {
//         event.preventDefault();

//         var regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (email.length === 0) {
//             setemailE(true);
//             setemailerror('* Email Required');
//             setForm(false);
//         }
//         else if (regex.test(email) === false) {
//             setemailE(true);
//             setemailerror('* Invalid Email');
//             setForm(false);
//         }
//         else {
//             setemailE(false);
//             setemailerror('Looks good!');
//             setForm(true);
//         }
//         if (password.length === 0) {
//             setpasswordE(true);
//             setpassworderror('* Password Required')
//             setForm(false);
//         }
//         else if (password.length < 6) {
//             setpasswordE(true);
//             setpassworderror('* Min 6 Characters');
//             setForm(false);
//         }
//         else {
//             setpasswordE(false);
//             setpassworderror('Looks good!');
//             setForm(true);
//         }
//         if (name.length === 0) {
//             setnameE(true);
//             setForm(false);
//             setnameerror('* Name Required')
//         }
//         else if (name.length < 3) {
//             setnameE(true);
//             setForm(false);
//             setnameerror('* Min 3 Characters')
//         }
//         else {
//             setnameE(false);
//             setnameerror('Looks good!');
//             setForm(true);

//         }
//         if (Form) {
//             setEmail('');
//             setemailerror('');
//             setpassworderror('');
//             setpassword('');
//             setnameerror('');
//             setName('');
//             const obj = {
//                 name: name,
//                 email: email,
//                 password: password,
//                 password_confirmation: password
//             }
//             this.props.UserReg(obj);
//         }

//     }
//     return (
//         <div className={classes.root}>
//             <form
//                 className="needs-validation"
//                 onSubmit={submitHandler}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <div>

//                     <TextField
//                         error={nameE}
//                         label="Name"
//                         value={name}
//                         name="name"
//                         id="standard-start-adornment1"
//                         onChange={handleChange('name')}
//                         className={clsx(classes.margin, classes.textField)}
//                         helperText={nameerror}
//                     />

//                     <TextField
//                         error={emailE}
//                         label="Email"
//                         value={email}
//                         name="email"
//                         id="standard-start-adornment"
//                         onChange={handleChange('email')}
//                         className={clsx(classes.margin, classes.textField)}
//                         helperText={emailerror}
//                     />


//                     <FormControl className={clsx(classes.margin, classes.textField)}>
                        // {(() => {
                        //     if (passwordE) {
                        //         return (
                        //             <InputLabel htmlFor="standard-adornment-password" style={{ color: 'red' }}>Password</InputLabel>

                        //         )
                        //     }
                        //     else {
                        //         return (
                        //             <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>

                        //         )
                        //     }
                        // })()}
//                         <Input
//                             error={passwordE}
//                             id="standard-adornment-password"
//                             type={showPassword ? 'text' : 'password'}
//                             value={password}
//                             onChange={handleChange('password')}
//                             name="password"
//                             endAdornment={
//                                 <InputAdornment position="end">
//                                     <IconButton
//                                         aria-label="toggle password visibility"
//                                         onClick={handleClickShowPassword}
//                                         onMouseDown={handleMouseDownPassword}

//                                     >
//                                         {showPassword ? <Visibility /> : <VisibilityOff />}
//                                     </IconButton>
//                                 </InputAdornment>
//                             }
//                         />
//                         {(() => {
//                             if (passwordE) {
//                                 return (
//                                     <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}><b>{passworderror}</b></p>
//                                 )
//                             }
//                             else {
//                                 return (
//                                     <p style={{ fontSize: '12px', marginTop: '4px' }}><b>{passworderror}</b></p>
//                                 )
//                             }
//                         })()}
//                     </FormControl>
//                     <Button variant="contained" color="secondary" className={clsx(classes.margin)} type="submit">
//                         Register
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     );
// }
// Register.propTypes = {
//     UserReg: PropTypes.func.isRequired
// };

// export default connect(null,{UserReg})(Register)
