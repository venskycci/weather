import { useState, useEffect } from "react";
import './App.css';
import FirstPanel from "./components/firstPanel";
import Hightlights from './components/hightlights_weather';

const dateToStr =(date)=>{
  var today=new Date(date);
  var month=today.toLocaleString('en-us',{month:'short'});
  var weekday=today.toLocaleString('en-us',{weekday:'short'});
  var day=today.getDate();
  var today_string=weekday+', '+day+' '+month;

  return today_string;
}

const API_KEY="43d2d1023ae5c6c8a741593c7261b46f";
var LAT=-32.9615869;
var LON=-60.6253564;

var REQUEST_URL ="https://api.openweathermap.org/data/2.5/weather?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric"
var REQUEST_URL1="https://api.openweathermap.org/data/2.5/forecast?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric"

function App() {
  
  const [Position,setPosition]=useState({latitude:LAT,longitude:LON});
  
  function getLocation() {
    if (navigator.geolocation) {
      
       navigator.geolocation.getCurrentPosition(showPosition);
     
    } else {
      alert("denied");
        
    }
  }
  
  function showPosition(position) {
    
    LAT=position.coords.latitude 
    LON=position.coords.longitude;
    REQUEST_URL ="https://api.openweathermap.org/data/2.5/weather?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric"
    REQUEST_URL1="https://api.openweathermap.org/data/2.5/forecast?lat="+LAT+"&lon="+LON+"&appid="+API_KEY+"&units=metric"
    
    setPosition({latitude:LAT,longitude:LON});
    
  }
  
  
   const [Convert,setConvert]=useState('C');
   const [todayTemp,settodayTemp]=useState(5);
   const [CityName,setCityName]=useState('rosario');
   const [WeatherType,setWeatherType]=useState('clear');
   const [WeatherImg,setWeatherImg]=useState('01d');
   const HightlightData={
           
    humidity:1,
    pressure:1,
    visibility:1,
    windD:1,
    windS:1

  };
   const[Hightlight,setHightlight]=useState(HightlightData);
   const[ForecastTemp,setForecastTemp]=useState([{},{},{},{},{}]);
   const[ForecastIcon,setForecastIcon]=useState(['01d','01d','01d','01d','01d']);
   const[ForecastDate,setForecastDate]=useState([]);
  
   
   
   
   
   const fetch_data_2 =()=>{
    REQUEST_URL ="https://api.openweathermap.org/data/2.5/weather?lat="+Position.latitude+"&lon="+Position.longitude+"&appid="+API_KEY+"&units=metric"
     
    
    fetch(REQUEST_URL)
   .then((response) => response.json())
   .then((data) =>{

    const Temp=Math.round(data.main.temp);
    const city=data.name;
    const Weather=data.weather[0];
    const WeatherType=Weather.description;
    const WeatherIcon=Weather.icon;


    HightlightData.humidity=data.main.humidity
    HightlightData.pressure=data.main.pressure
    HightlightData.visibility=data.visibility
    HightlightData.windD=data.wind.deg
    HightlightData.windS=data.wind.speed
    
    settodayTemp(Temp);
    setWeatherType(WeatherType);
    setCityName(city);
    setWeatherImg(WeatherIcon);
    setHightlight(HightlightData);
    
    console.log(data);
   })}
 

 const fetch_data =()=>{
  
  REQUEST_URL1="https://api.openweathermap.org/data/2.5/forecast?lat="+Position.latitude+"&lon="+Position.longitude+"&appid="+API_KEY+"&units=metric"
  
    fetch(REQUEST_URL1)
   .then((response) => response.json())
   .then((data) =>{

    
    console.log(data);
   
    
    
   
    const list=data.list;
    var MaxTemp=[];
    var MinTemp=[];
    var ForcastDateList=[];
    var icon=[];
    
    var ForcastIconList=[]
    let Max=6;
    let Min=3;
    for (let i=0;i<5;i++){
       MaxTemp[i]=list[Max].main.temp_max;
       MinTemp[i]=list[Min].main.temp_min;
       ForcastDateList[i]=dateToStr(list[i*8].dt_txt);
       icon[i]=list[Min+1].weather[0].icon;
       ForcastIconList[i]=list[Min+1].weather[0].icon;
      
       Min=Min+8
       Max=Max+8

    }
    
   
   
    var ForecastTempObj={}
    var ForecastTempList=[]
    for (let i=0;i<5;i++){
      
     
      
      
      ForecastTempObj.max=Math.round(MaxTemp[i])
      ForecastTempObj.min=Math.round(MinTemp[i])
      ForecastTempList[i]=ForecastTempObj;
      
      
     
      ForecastTempObj={}
      

    }
  setForecastTemp(ForecastTempList);
  setForecastIcon(ForcastIconList);
  setForecastDate(ForcastDateList);
    
    
   
    
})}

const PositionHandler=()=>{
   
   getLocation();
}




useEffect(() => {
             fetch_data();
             fetch_data_2();
             
             
             },[Position]);
             
useEffect(() => {
              getLocation();
              
              
              },[]);
           

 

 //cambiar unidad C<=>F
  const unit_change=()=>{
              
              if(Convert==='C'){
                  settodayTemp(Math.round(((todayTemp*(9/5))+32)))
                  
                  var Temp = ForecastTemp;
                  var TempConvert = Temp.map(function(x) {
                     var obj={};
                     obj.max= Math.round(((x.max*(9/5))+32))
                     obj.min=Math.round(((x.min*(9/5))+32))
                     return obj ;
                  });
                 setForecastTemp(TempConvert);
                
                
                  setConvert('F')
               }
               if(Convert==='F'){
                   settodayTemp(Math.round((todayTemp-32)*(5/9)))
                   setConvert('C')

                   //debe ser una funcion
                     Temp = ForecastTemp;
                     TempConvert = Temp.map(function(x) {
                       var obj={};
                       obj.max= Math.round((x.max-32)*(5/9))
                       obj.min=Math.round((x.min-32)*(5/9))
                       return obj ;
                    });
                    setForecastTemp(TempConvert);
               }
               
           }
  return (
    <div className='weathers'>
     <FirstPanel
       today_icon={WeatherImg}
       today_temp={todayTemp}
       weather_type={WeatherType}
       location={CityName} 
       unit={Convert}
       Pos={()=>PositionHandler()}
       Position={setPosition}
      />
    
      <Hightlights 
                  wind_speed={Hightlight.windS}
                  wind_direc={Hightlight.windD}
                   humid={Hightlight.humidity}
                   visib={Hightlight.visibility}
                   air_pre={Hightlight.pressure}
                   onclick={()=>unit_change()}
                   unit={Convert}
                   ForeTemp={ForecastTemp}
                   ForeIcon={ForecastIcon}
                   ForeDate={ForecastDate}
                   
                   
                   />
    </div>
      
  )
}

export default App;
