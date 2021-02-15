import React from 'react';
import Button from './Button';

const QouteMachine = (props) => {
   return (
        <React.Fragment>
            {props.selectedQoute ? `${props.selectedQoute.author} - "${props.selectedQoute.qoute}"` : ''} 
            <Button buttonDisplayName="Next Qoute" clickHandler={props.assignNewQouteIndex} />
         </React.Fragment>
    );
}

export default QouteMachine;