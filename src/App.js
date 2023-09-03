import React,{useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c90362d052aa16126f89d92472fe04d2`


  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
   }

  return (
    <div className="App">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} placeholder="Enter Location" onKeyPress={searchLocation} type="text" />
      </div>
           <div className="container">
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
                
            </div>
            <div className="description">
              {data.weather ? <p className="bold">{data.weather[0].main}</p> : null}
              <p>Clouds</p>
            </div>
            </div>

          {data.name !== undefined && 
            <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
            </div>
          }
              


           </div>
    </div>
  );
}

export default App;
