import React,{useState} from 'react';
import '../styles/MyStyle.css';
import SearchCity from '../components/SearchCity/SearchCity';
import Startdel from '../components/Startdel/Startdel';
import Detaildel from '../components/DetailDel/Detaildel';

const WeatherContainer = () =>{

//Startdelen för Stockholm och detaljer
const getStartBlogItem = () =>{

    const url="http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";

    fetch(url)
    .then(response=>response.json())
    .then(item => {

        var details = {city:item.city, today:item.list[0]};
            setStartBlogItem(details);
            return details;
        });
}


//Detaljdelen framåt dagarna
const getDetailBlogItem = () =>{

    const url="http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";
    
    fetch(url)
    .then(response=>response.json())
    .then(item => {

        var today = item.list[0];
        var forwardDays = item.list.filter(day => day.dt_txt.endsWith('12:00:00') && day.dt_txt.substring(0,11) !== today.dt_txt.substring(0,10));
        if (forwardDays.length > 5) {
            forwardDays.pop();
        }
    
        setDetailBlogItem(forwardDays);
        return forwardDays;
    });
}

    //Sätta värde på båda delar
    const [blogStartItem, setStartBlogItem] = useState(() => {
        const initialState = getStartBlogItem();
        return initialState;
    });
    const [blogDetailtItem, setDetailBlogItem] = useState(() => {
        const initialState = getDetailBlogItem();
        return initialState;
    });
    

    //Sökning för stad
    const searchItem = (cityVal) =>{

        const url = "http://api.openweathermap.org/data/2.5/forecast?q="+cityVal+"&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";

        GetItemInfo(url);
    }

    function GetItemInfo(url) {

        fetch(url)
        .then((response) => {
            if (response.ok) 
            {
              return response.json();
            } 
            else 
            {
              throw new Error('No actual city entered');
            }
        })
        .then((item) => {
            var today = item.list[0];
            var details = {city:item.city, today:item.list[0]};
    
            var forwardDays = item.list.filter(day => day.dt_txt.endsWith('12:00:00') && day.dt_txt.substring(0,11) !== today.dt_txt.substring(0,10));
            if (forwardDays.length>5) {
                forwardDays.pop();
            }
    
            setStartBlogItem(details);
            setDetailBlogItem(forwardDays);
        })
        .catch((error) => {
          console.log(error)
        });
    }
    

     return(<>
       <SearchCity searchItem={searchItem} />
       <Startdel item={blogStartItem} />
       <Detaildel items={blogDetailtItem} />
     </>);

}

export default WeatherContainer;
