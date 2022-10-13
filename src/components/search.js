import React from 'react';
import { useState} from "react";

const Search=(props)=>{
   
    const [SearchResult,setSearchResult]=useState([]); 
    const [UserSearch, setUserSearch] = useState('');
    const [LoadCity,setLoadCity]=useState(true);
    
    const handleChange = event => {
        setUserSearch(event.target.value);
    };
    //fetch 
    const fetch_geocoder =()=>{
      fetch("http://api.openweathermap.org/geo/1.0/direct?q="+UserSearch+"&limit=5&appid=43d2d1023ae5c6c8a741593c7261b46f")
     .then((response) => response.json())
     .then((data) =>{
     console.log(data)
      
      
      const len=data.length
      console.log(len)
      if(len===0){setLoadCity(false)}
      
      else{
       let cities=[];
       for (let i=0;i<len;i++){
         cities[i]={}
         cities[i].country=data[i].country
         cities[i].name=data[i].name
         if(data[i].state!==undefined){cities[i].state=','+data[i].state}
         else{cities[i].state=''}
         
         cities[i].lat=data[i].lat
         cities[i].lon=data[i].lon
         cities[i].key=i;
      }
      setSearchResult(cities);
    }
     
      
           
     })}

     const handleClick = event => {
      event.preventDefault();
      setSearchResult([])
      setLoadCity(true);
      fetch_geocoder();
      
      
     };
     const Enterpress = event=>{fetch_geocoder() }

     const NewPosition=(n)=>{
      props.Position({latitude:SearchResult[n].lat,longitude:SearchResult[n].lon});
      props.searchclick()
     }
    
    return(<div className='search_box'>
                       <div className='close'>
                            <span onClick={props.searchclick}  className="material-icons-round">close</span>
                       </div>
                       
                       <div className='search'>
                      <div className='searchInput'>
                      
                       <input type='search' 
                              onChange={handleChange}  
                              placeholder='search location'  
                              
                              value={UserSearch}
                              onKeyPress={event =>{
                                            if (event.key ==='Enter' && UserSearch!==''){
                                              Enterpress()
                                              setSearchResult([])
                                              setLoadCity(true);
                                              }
                                              }}
                              
                              />
                           <span  className='material-icons'>search</span>
                       </div>
                       
                       <button onClick={handleClick}  className='button_search'>Search</button>
                       </div>
                       <div className='city-container'>
                       
                           {LoadCity?
                                     SearchResult.map(city => <div onClick={()=>NewPosition(city.key)}  key={city.key} className='city-box'>
                                
                                <div className='city-name'> {city.name}{city.state},{city.country} </div><span className='material-icons'>chevron_right</span>
                                
                               
                          </div>):<h3>City not found</h3>}
                          </div>
</div>);
}

export default Search