import React, { Component } from 'react'
import './pages.css'
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
export class Contact extends Component {
    state = {
        fname: "",
        lname: "Otto",
        email: "",
        city: "",
        state: "",
        zip: "",
        fnameError: "",
        fnametouch: false,
        emailError: "",
        emailtouch: false
    }
    error = {
        ferror: ""
    }

    submitHandler = event => {
        event.preventDefault();

        if (this.state.fname.length === 0) {
            this.setState((state) => {
                document.getElementById("materialFormRegisterNameEx").style.borderColor = 'red';
                return { fnameError: '* First Name is Required' }

            });
        }
        else if (this.state.fname.length < 3) {
            this.setState((state) => {
                document.getElementById("materialFormRegisterNameEx").style.borderColor = 'red';
                return { fnameError: '* Min 3 Characters' }

            });
        }
        else {
            this.setState((state) => {
                document.getElementById("materialFormRegisterNameEx").style.borderColor = 'green';
                return { fnameError: '' }

            });

        }
        var regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.email.length === 0) {
            this.setState((state) => {
                document.getElementById("materialFormRegisterEmailEx").style.borderColor = 'red';
                return { emailError: '* Email is Required' }

            });
        }
        else if (regex.test(this.state.email)===false) 
        { 
            this.setState((state) => {
                document.getElementById("materialFormRegisterEmailEx").style.borderColor = 'red';
                return { emailError: '* Invalid Email' }

            });
        }
        else {
            this.setState((state) => {
                document.getElementById("materialFormRegisterEmailEx").style.borderColor = 'green';
                return { emailError: '' }

            });

        }

    };

    changeHandler = event => {
        if (event.target.name === 'fname') {
            this.setState((state) => {
                return { fnametouch: true }

            });
            if (event.target.value.length === 0) {
                this.setState((state) => {
                    document.getElementById("materialFormRegisterNameEx").style.borderColor = 'red';
                    return { fnameError: '* First Name is Required' }

                });

            }
            else if (event.target.value.length < 3) {
                this.setState((state) => {
                    document.getElementById("materialFormRegisterNameEx").style.borderColor = 'red';
                    return { fnameError: '* Min 3 Characters' }

                });
            }
            else {
                this.setState((state) => {
                    document.getElementById("materialFormRegisterNameEx").style.borderColor = 'green';
                    return { fnameError: '' }

                });

            }
        }
        if (event.target.name === 'email') {
            this.setState((state) => {
                return { emailtouch: true }

            });
            var regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (event.target.value.length === 0) {
            this.setState((state) => {
                document.getElementById("materialFormRegisterEmailEx").style.borderColor = 'red';
                return { emailError: '* Email is Required' }

            });
        }
        else if (regex.test(event.target.value)===false) 
        { 
            this.setState((state) => {
                document.getElementById("materialFormRegisterEmailEx").style.borderColor = 'red';
                return { emailError: '* Invalid Email' }

            });
        }
        else {
            this.setState((state) => {
                document.getElementById("materialFormRegisterEmailEx").style.borderColor = 'green';
                return { emailError: '' }

            });

        }
        }
        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (
            <div id="h1" className="col-lg-8">
                <h1 >Contact Page</h1>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                    autoComplete="off"
                >
                    <MDBRow>
                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterNameEx"
                                label="First name"
                                outline
                            >
                                {(() => {
                                    if (this.state.fnameError) {
                                        return (
                                            <p style={{ color: 'red' }}>
                                                <small>{this.state.fnameError}</small>
                                            </p>
                                        )
                                    }
                                    else if (this.state.fnametouch) {
                                        return (
                                            <p style={{ color: 'green' }}>
                                                <small>Looks good!</small>
                                            </p>
                                        )
                                    }
                                })()}

                            </MDBInput>
                        </MDBCol>

                        <MDBCol md="4">
                            <MDBInput
                                value={this.state.email}
                                name="email"
                                onChange={this.changeHandler}
                                type="text"
                                id="materialFormRegisterEmailEx"
                                label="Email"
                                outline
                            >
                                {(() => {
                                    if (this.state.emailError) {
                                        return (
                                            <p style={{ color: 'red' }}>
                                                <small>{this.state.emailError}</small>
                                            </p>
                                        )
                                    }
                                    else if (this.state.emailtouch) {
                                        return (
                                            <p style={{ color: 'green' }}>
                                                <small>Looks good!</small>
                                            </p>
                                        )
                                    }
                                })()}

                            </MDBInput>
                        </MDBCol>

                    </MDBRow>



                    <MDBBtn color="success" type="submit">
                        Submit Form
          </MDBBtn>
                </form>
            </div>
        )
    }
}

export default Contact
