import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TopBar extends React.Component {

    state = {
        redirectCheck: false
    }

    onClickLogout = () => {
        const action = {
            type: 'logout-success'
        };
        this.props.dispatch(action);
    }

    render() {
        let links = '';
        if (!this.props.user.isLoggedIn) {
            links = (
                <ul className="nav navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link blue-link text-center mx-2 align-middle">
                            Login
                        </Link>
                    </li>
                </ul >
            )
        }
        if (this.props.user.isLoggedIn) {
            links = (
                <ul className="nav navbar-nav ms-auto">
                    <li className="nav-item" onClick={this.onClickLogout} role="button">
                        <Link to="/homepage" className="nav-link blue-link text-center mx-2 align-middle">
                            Uitloggen
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link blue-link text-center mx-2 align-middle">
                            Agenda
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/account" className="nav-link blue-link text-center mx-2 align-middle">
                            Account
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manager/dashboard" className="nav-link blue-link text-center mx-2 align-middle">
                            Dashboard
                        </Link>
                    </li>
                </ul >
            )
        }
        if (this.props.user.isLoggedIn && true == false) {
            links = (
                <ul className="nav navbar-nav ms-auto">
                    <li className="nav-item" onClick={this.onClickLogout} role="button">
                        <p className="nav-link">Uitloggen</p>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Account
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Dashboard
                        </Link>
                    </li>
                </ul >
            )
        }
        return (
            <div>
                <div className="container-fluid px-xl-18">
                    <nav className="navbar sticky-top navbar-expand border-bottom border-primary border-7">
                        <Link to="/" className="navbar-brand text-primary ms-4 p-0">
                            <h1 className="display-4 mb-0">Boekenwinkel</h1>
                        </Link>
                        {links}
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(TopBar);