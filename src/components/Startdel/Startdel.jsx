import React from 'react';
import './Startdel.css';

const StartDel = ({item}) => {

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Söndag";
    weekday[1] = "Måndag";
    weekday[2] = "Tisdag";
    weekday[3] = "Onsdag";
    weekday[4] = "Torsdag";
    weekday[5] = "Fredag";
    weekday[6] = "Lördag";
    var dayText = weekday[d.getDay()];
    var date;
    var time;
    var city;
    var temp;
    var description;
    var img;

    if (typeof item !== 'undefined') {
        date = item.today.dt_txt.substring(0,10);
        time = item.today.dt_txt.substring(11,16);
        city = item.city.name;
        temp = item.today.main.temp;
        description = item.today.weather[0].description;
        img = "http://openweathermap.org/img/wn/"+item.today.weather[0].icon+"@2x.png";
    }
    console.log({item});

    return (<div className="startStyle">
        
                    <div className="startInfoRight">
                        <img src={img} className="startImgSize" alt="weather icon"/>
                        <h3>{description}</h3>
                    </div>
                    <div className="startInfoLeft">
                        <h1>{city}</h1>
                        <h2>{dayText}</h2>
                        <h3>{date}</h3>
                        <h3>{time}</h3> 
                        <h3>{temp} &#8451;</h3>
                    </div>

            </div>);
}

export default StartDel;