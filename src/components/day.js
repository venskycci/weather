import React from "react";




const Day=(props)=>{
    return(<div className="day_weather">
        <p className="tomorrow">{props.day}</p>
        <div className="tomorrow_image">
                       <img src={require('../images/'+props.day_weath+'.png')} />
        </div>
       
        <p className="temp_maxmin">
                        
        <span className="max_temp">{props.max_temp}°{props.unit}</span> <span className="min_temp">{props.min_temp}°{props.unit}</span>
           </p>
        




    </div>



    );

}


export default Day;