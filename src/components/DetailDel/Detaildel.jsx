import React from 'react';
import './Detaildel.css';

const Detaildel = ({items}) =>{

    var all;
    var img = [];

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Söndag";
    weekday[1] = "Måndag";
    weekday[2] = "Tisdag";
    weekday[3] = "Onsdag";
    weekday[4] = "Torsdag";
    weekday[5] = "Fredag";
    weekday[6] = "Lördag";
    weekday[7] = "Söndag";
    weekday[8] = "Måndag";
    weekday[9] = "Tisdag";
    weekday[10] = "Onsdag";
    weekday[11] = "Torsdag";
    
    if (typeof items === 'undefined') {
        all =  [{dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]},
                {dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]},
                {dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]},
                {dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]},
                {dt_txt:"2021-01-01 12:00:00", main: {temp:10}, weather:[{icon:"04d"}]}];
    }
    else
    {
        all = items;
    }

    all.forEach(item => {
        img.push("http://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png");
    });

    
    return (<div className="detailStyle">

                <div className="detailDelStyle">
                    <img src={img[0]} alt="weather icon"/>
                    <p>{all[0].main.temp}&#8451;</p>
                    <h4>{weekday[d.getDay()+1]}
                    <br/>
                    {all[0].dt_txt.substring(0,10)}</h4>
                </div>

                <div className="detailDelStyle">
                    <img src={img[1]} alt="weather icon"/>
                    <p>{all[1].main.temp}&#8451;</p>
                    <h4>{weekday[d.getDay()+2]}
                    <br/>
                    {all[1].dt_txt.substring(0,10)}</h4>
                </div>

                <div className="detailDelStyle">
                    <img src={img[2]} alt="weather icon"/>
                    <p>{all[2].main.temp}&#8451;</p>
                    <h4>{weekday[d.getDay()+3]}
                    <br/>
                    {all[2].dt_txt.substring(0,10)}</h4>
                </div>

                <div className="detailDelStyle">
                    <img src={img[3]} alt="weather icon"/>
                    <p>{all[3].main.temp}&#8451;</p>
                    <h4>{weekday[d.getDay()+4]}
                    <br/>
                    {all[3].dt_txt.substring(0,10)}</h4>
                </div>

                <div className="detailDelStyle">
                    <img src={img[4]} alt="weather icon"/>
                    <p>{all[4].main.temp}&#8451;</p>
                    <h4>{weekday[d.getDay()+5]}
                    <br/>
                    {all[4].dt_txt.substring(0,10)}</h4>
                </div>

            </div>);

}

export default Detaildel;