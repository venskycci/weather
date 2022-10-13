import { useState} from "react";
import Search from "./search";
import TodayWeather from "./today_weather";


const FirstPanel=(props)=>{
 
    const [Search_active,setSearch]=useState(false);
            const search_switch=()=>{
                if(!Search_active){
                 setSearch(true);
                }
                if(Search_active){ 
                        setSearch(false);
                }
        }

    return(
      <div className='firstpanel'>
        { Search_active?
            <Search
            searchclick={()=>search_switch()}
            Position={props.Position}
            />:
            <TodayWeather
                 today_icon={props.today_icon}
                 today_temp={props.today_temp}
                 weather_type={props.weather_type}
                 today_date={props.today_date}
                 location={props.location}
                 unit={props.unit}
                 searchclick={()=>search_switch()}
                 Pos={props.Pos}
             />
        }
        </div>
    );
}
export default FirstPanel;