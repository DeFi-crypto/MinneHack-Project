import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Pill(props) {
    return(<div className = {`bg-${props.color}-200 rounded-full p-1 text-center mr-2 mt-1 flex-auto`}>
    <FontAwesomeIcon className = {`text-${props.color}-800 inline mr-1`} icon={props.icon} />
    <p className = {`inline text-sm text-${props.color}-800 text-center`}>{props.text}</p>
    
    </div>)
}



export default Pill;