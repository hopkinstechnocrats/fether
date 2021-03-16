import React from 'react';
import './RoundBox.css';

class RoundBox extends React.Component {

    render() {
        let classname = "RoundBox "+this.props.color;
        return (
            <div className={classname} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}

export default RoundBox;