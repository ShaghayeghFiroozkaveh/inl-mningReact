import React,{useRef} from 'react';
import './SearchCity.css';

//import '../styles/MyStyle.css';

const SearchCity = ({searchItem}) =>{
    
     const CityVal = useRef();

     return(<div className="searchStyle">

        <input className="txtSearch" type="text" placeholder="Sök efter stad" ref={CityVal} />
        <button className="btnSearch" onClick={ () => searchItem(CityVal.current.value)}>Sök</button>
        
     </div>);

}

export default SearchCity;
