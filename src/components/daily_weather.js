import React from 'react';

import Day from './day';



const UpcomingWeather = (props) =>{
     
    
     const Temp=props.ForeTemp;
     const Icon=props.ForeIcon;
     const Date=props.ForeDate
     
     return (<div className='daily_weather'>
         
              <Day day={"Tomorrow"} day_weath={Icon[0]} max_temp={Temp[0].max} min_temp={Temp[0].min} unit={props.unit}/>
              <Day day={Date[1]} day_weath={Icon[1]} max_temp={Temp[1].max} min_temp={Temp[1].min} unit={props.unit}/>
              <Day day={Date[2]} day_weath={Icon[2]} max_temp={Temp[2].max} min_temp={Temp[2].min} unit={props.unit}/>
              <Day day={Date[3]} day_weath={Icon[3]} max_temp={Temp[3].max} min_temp={Temp[3].min}unit={props.unit}/>
              <Day day={Date[4]} day_weath={Icon[4]} max_temp={Temp[4].max} min_temp={Temp[4].min} unit={props.unit}/>




     </div>



     );
}

export default UpcomingWeather;