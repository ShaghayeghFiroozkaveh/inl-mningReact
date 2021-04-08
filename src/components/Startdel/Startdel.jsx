import React from 'react';
import './Startdel.css';

//Detta är en ren presentation komponent som bara visar HTML
const Startdel = ({items}) =>{

   
    console.log("hejjj");
    console.log({items});
    

    return(<div className="startStyle">
        {/* <p>{items.city}</p> */}
        {items}
         </div>);
}

export default Startdel;

//        {location.name}
