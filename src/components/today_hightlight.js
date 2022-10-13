import React from 'react';
import degToCompass from '../compass';




const TodaysHighlights=(props)=>{
    return (<div className='hightlightContainer'>
                  
                  <div className='row1'>
                  <div className='Hbox1'>
                        <p>Wind status</p>
                        <div className='mph'>  {props.wind_speed}<span> m/s</span> </div>
                
                        <div className='Windata'>
                           <div className='navegation'>
                                <span style={{transform: 'rotate('+props.wind_direc+'deg)' }} className="material-icons-round">
                                         navigation </span>
                           </div> 
                     
                           <div className='wind_direc'>{degToCompass( props.wind_direc)}</div>
                    
                        </div>

                   </div>
            
                   <div className='Hbox2'>
                           <p>Humidity</p>
                           <div className='mph'>{props.humid}<span>%</span></div>
                           <div className='percent-bar'><span>0</span> <span>50</span> 100</div>
                           <div className="progress">
                                 <div className="progress-bar" role="progressbar" style={{width: props.humid+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                           </div>
                           <div className='percent-sign'><span>%</span></div>
                    </div>
                  </div>
            
                   
                  <div className='row2'>
                   <div className='Hbox3'>
                         <p>Visibility</p>
                         <div className='mph'>{props.visib/1000}<span> km</span></div>
                   </div>
            
                   <div className='Hbox4'>
                         <p>Aires Pressure</p>
                         <div className='mph'>{props.air_pre} <span> hPa</span></div>
                   </div>
                </div>


          </div>
    );
}



export default TodaysHighlights;