import React from 'react';
import '../App.css'
import UpcomingWeather from './daily_weather';
import TodaysHighlights from './today_hightlight';

const Hightlights = (props) =>{
      return(
          <div className='next_weather'>
              <div className='tempButton'>
              { (props.unit==='C') ? 
              <div className='celcius_butt'  id='convert-active'><h4>°C</h4></div>: <div  onClick={props.onclick} className='celcius_butt'><h4>°C</h4></div>}
              
              { (props.unit==='F')? <div className='farenh_butt' id='convert-active'><h4>°F</h4></div>: <div  onClick={props.onclick} className='farenh_butt'><h4>°F</h4></div>}
              </div>
              <UpcomingWeather daily_data={props.daily_data} 
                               unit={props.unit} 
                               ForeTemp={props.ForeTemp}
                               ForeIcon={props.ForeIcon}
                               ForeDate={props.ForeDate} 
                               />
              
              <p className='today_hightlight'>Today's Hightlights</p>
              <TodaysHighlights
                     wind_speed= {props.wind_speed}
                     wind_direc={props.wind_direc}
                     humid={props.humid}
                     visib={props.visib}
                     air_pre={props.air_pre}
                    
              
              
              />
              
              
              <p className='created'>created by <a target="_blank" href='https://venskycci.github.io/portafolio/'>Mavensky</a> - devChallenges.io</p>
          </div>




      );  

 

}

export default Hightlights;
