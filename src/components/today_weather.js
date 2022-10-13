import React from 'react';
import '../App.css';
import '../index.css';

const dateToString =()=>{
        var today=new Date();
        var month=today.toLocaleString('en-us',{month:'short'});
        var weekday=today.toLocaleString('en-us',{weekday:'short'});
        var day=today.getDate();
        var today_string=weekday+', '+day+' '+month;
      
        return today_string;
      }

const TodayWeather = (props) =>{
       return(
            <div className='today_weather'>
                
                <div className='box1'>
                   <button onClick={props.searchclick} className='search_button'>
                         Seach for places
                   </button>
                   <button  type="button"className='ellipse_2' onClick={props.Pos}>
                         <span className="material-icons">
                                  my_location
                         </span>
                    </button>
                </div>
                
                <div className='cloud_background'>
                
                </div>
                
                <div className='background'>
                   <div className='weather_type_image'>
                         <img alt='' src={require('../images/'+props.today_icon+'.png')}/>
                   </div>
                </div>
                
                <div className='today_temp'>
                        {props.today_temp}<b>°{props.unit}</b>
                </div>

                
                <div className='weather_type'>
                        {props.weather_type}
                </div>
                
                <div className='todayDate'>
                    <div className='today'>
                        Today
                    </div>
                
                    <div className='point'>
                        .
                    </div>
                
                    <div className='today_date'>
                              {dateToString()}
                </div>
                </div>
                
                <div className='box2'>
                    <div className='location'>
                          <span className="material-icons">location_on</span>
                    </div>
                    <div className='location_text'>{props.location}</div>
                </div>
                      
                      

            </div> )
}
           

export default TodayWeather;