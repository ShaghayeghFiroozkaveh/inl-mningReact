import React,{useRef} from 'react';
import './Detaildel.css';

const Detaildel = ({items}) =>{

    console.log({items});

    return(<div className="detailStyle"> 
    <div className="detailDelStyle">
        <p>hej</p>
        {items}
    </div>
    <div className="detailDelStyle">
        <p>hej</p>
        {items}
    </div>
    <div className="detailDelStyle">
        <p>hej</p>
        {items}
    </div>
    <div className="detailDelStyle">
        <p>hej</p>
        {items}
    </div>
    <div className="detailDelStyle">
        <p>hej</p>
        {items}
    </div>
     </div>);


}

export default Detaildel;