import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserReg } from '../actions/actions'
import { Redirect } from 'react-router';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            showPassword: false

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password
        };

        this.props.UserReg(obj);
        console.log(this.props.Admin);
        if (this.props.Admin) {
            console.log(this.props.Admin);
        }

    }

    handleClickShowPassword = () => {
        //this.setState({  showPassword: ! showPassword });

    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        const token = localStorage.getItem('token');
        if (token) {
            return <Redirect to='/' />;
        } else {
            

            return (
                <div >

                   
                    <form
                        className="needs-validation"
                        onSubmit={this.onSubmit}
                        noValidate
                        autoComplete="off"
                    >
                        <div>

                            <TextField
                                //error={nameE}
                                label="Name"
                                value={this.state.name}
                                name="name"
                                id="standard-start-adornment1"
                                onChange={this.onChange}
                            //className={clsx(classes.margin, classes.textField)}
                            //helperText={nameerror}
                            />
                            <br />
                            <TextField
                                //error={emailE}
                                label="Email"
                                value={this.state.email}
                                name="email"
                                id="standard-start-adornment"
                                onChange={this.onChange}
                            //className={clsx(classes.margin, classes.textField)}
                            //helperText={emailerror}
                            />

                            <br />
                            <FormControl >

                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>

                                <Input
                                    // error={passwordE}
                                    id="standard-adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    name="password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}

                                            >
                                                {this.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                            </FormControl>
                            <br />
                            <Button variant="contained" color="secondary" type="submit">
                                Register
                        </Button>
                        </div>
                    </form>
                </div>
            );
        }
    }

}
Register.propTypes = {
    UserReg: PropTypes.func.isRequired,
    user: PropTypes.object
};
const mapStateToProps = state => ({
    Admin: state.user.Admin,
    token: state.user.Admin_Token,
    errors: state.user.errors
});
export default connect(mapStateToProps, { UserReg })(Register)
