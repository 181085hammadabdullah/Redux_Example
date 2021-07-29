import React, { Component } from 'react'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routes';

export class Header extends Component {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
    };

    render() {
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
        );

        const { collapseID } = this.state;

        return (
            <Router>
                <div className='flyout'>
                    <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
                        <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                         
                            <strong className='align-middle'>MDB React</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            onClick={this.toggleCollapse('mainNavbarCollapse')}
                        />
                        <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink
                                        exact
                                        to='/'
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                    >
                                        <strong>Home</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                              
                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/login'
                                    >
                                        <strong>Login</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/Register'
                                    >
                                        <strong>Register</strong>
                                    </MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/Chat'
                                    >
                                        <strong>Chat</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    {collapseID && overlay}
                    <main style={{ marginTop: '4rem' }}>
                        <Routes />
                    </main>

                </div>
            </Router>
        );
    }

}

export default Header
