import React,{useState, useRef} from 'react';
import './SearchCity.css';

//import '../styles/MyStyle.css';

const SearchCity = ({searchItem}) =>{

    
     const CityVal = useRef();

    /*const cityvalue= CityVal.current.value;
    if(cityvalue=== "")
    {
        cityvalue="stockholm";
    }*/
    

     return(<div className="searchStyle">
        <input type="text" ref={CityVal} className="txtSearch" />
        <button className="btnSearch" onClick={ () => searchItem(CityVal.current.value)}>Sök</button>
        
     </div>);

    
 //<p>{blogItem.request.query}</p>
}

export default SearchCity;
