import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
                href,
                icon
            },
        } = this;

        let className = 'tab-list-item';

        return (
            <li
                className={className}
                onClick={onClick}
                href={href}
            >
                <Link to={href}>{icon}</Link>
                
            </li>
        )
    }
}

export default Tab;