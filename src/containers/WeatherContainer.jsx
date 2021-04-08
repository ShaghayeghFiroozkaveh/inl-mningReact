import React,{useState, useRef, useEffect} from 'react';
import '../styles/MyStyle.css';
import SearchCity from '../components/SearchCity/SearchCity';
import Startdel from '../components/Startdel/Startdel';
import Detaildel from '../components/DetailDel/Detaildel';

const WeatherContainer = () =>{

    const blogCityVal = useRef();

    const [blogStartItem, setStartBlogItem] = useState([]);
    const [blogDetailtItem, setDetailBlogItem] = useState([]);
    
    let cityStklm = "Stockholm";
    // const url="http://api.openweathermap.org/data/2.5/forecast?q="+cityStklm+"&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";
    // const url="http://api.openweathermap.org/data/2.5/weather?q="+cityStklm+"&APPID=9dcae045383bbf0f60df7875526c7d56";
    const url="http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9dcae045383bbf0f60df7875526c7d56";
    // let city = "stockholm";
    //  useEffect( () => {

    //     if (city == null || city ==="stockholm")
    //     {
    //         console.log('Nu initeras värde 1');
    //         urlCity = "http://api.openweathermap.org/data/2.5/forecast?q=stockholm&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";

    //     }
    //     else
    //     {
    //         console.log('Knappklick. Nu uppdateras värde 1:' + city);
    //         urlCity = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";

    //     }
    //     fetch(urlCity)
    //     .then( response => response.json())
    //     .then( jsonItems => {
    //         setStartBlogItem(jsonItems);
    //     });
    // }, [city]);

    
    //Sökning för stad
    const searchItem = (city) =>{

         //let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";

         fetch(url)
         .then(response=>response.json())
         .then(item => {
             var city = item.city;
            //  var currentDay= item.list[0];
            //  var details = {city:item.city, currentDay:item.list[0]};
            //  var comingDays= item.list.filter(day=> day.dt_txt.endsWith('12:00:00'));
            //  if(comingDays.length> 4)
            //  {
            //     comingDays.pop();
            //  }
 
              console.log(city);
            //  console.log(item.city);
            //  console.log(item.city.name);

             setStartBlogItem(item);
         });
    }

    //Startdelen med stads namn och informationer
    const getStartBlogItem = (city) =>{

        // city=cityStklm;

        // if(city ==="")
        // {
        //     city="stockholm";
        // }
        // let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";

        fetch(url)
        .then(response=>response.json())
        .then(item => {
            var city = item.city;
             var currentDay= item.list[0];
             var details = {city:item.city, currentDay:item.list[0]};
             var comingDays= item.list.filter(day=> day.dt_txt.endsWith('12:00:00'));
             if(comingDays.length> 4)
             {
                comingDays.pop();
             }
 
             console.log(item);
             console.log(item.coord);
             console.log(item.coord.lat);
             console.log(item.coord);
            console.log(item.city);

            setStartBlogItem(item);
        });
    }

    
    //Detaljdelen med 5 dagar framåt informationer
    const getDetailBlogItem = (city) =>{

        // if(city ==="")
        // {
        //     city="stockholm";
        // }
        // let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=9dcae045383bbf0f60df7875526c7d56";

        fetch(url)
        .then(response=>response.json())
        .then(item => {
            var city = item.city;
             var currentDay= item.list[0];
             var details = {city:item.city, currentDay:item.list[0]};
             var comingDays= item.list.filter(day=> day.dt_txt.endsWith('12:00:00'));
             if(comingDays.length> 4)
             {
                comingDays.pop();
             }
 
            //  console.log(item.city);

            setStartBlogItem(item);
        });
    }

     return(<>
       <SearchCity searchItem={searchItem} />
       <Startdel items={blogStartItem} />
       <Detaildel items={blogDetailtItem} />
     </>);

      /*<input type="text" ref={blogCityVal} placeholder="sök efter plats" />
      <button onClick={getBlogItem}>Sök</button>
      <p>{blogItem.request.query}</p>
      <Startdel item={blogItem} />*/

}

export default WeatherContainer;
