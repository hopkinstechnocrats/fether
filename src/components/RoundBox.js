import React from 'react';

class RoundBox extends React.Component {

    render() {
    let classname = "RoundBox-"+this.props.color;
    return (
         <div className={classname} >
                {this.props.children}
            </div>
        );
    }
}

export default RoundBox;