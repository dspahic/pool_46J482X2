import React, { Component } from "react";
import PropTypes from 'prop-types';
import './style.css';

export default class Checkbox extends Component {
    render() {
        const { children, value, onChange } = this.props;
        return (
            <label className="checkbox" >{children}
                <input type="checkbox" checked={value} onChange={onChange} />
                <span className="checkmark"></span>
            </label>
        );
    }
}

Checkbox.propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    value: PropTypes.bool
};