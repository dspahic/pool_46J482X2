import React, { Component } from "react";
import Spinner from '../Spinner'
import PropTypes from 'prop-types';
import './style.css';

export default class Button extends Component {
    render() {
        const { onClick, children, className, isLoading } = this.props;
        return (
            <button className={"btn " + className} type="button" onClick={onClick}>
                {isLoading ? <Spinner /> : children}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isLoading: PropTypes.bool,
};