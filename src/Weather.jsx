import { useState } from "react";
import Info from "./Info";
import Searchbox from "./Searchbox";

function WeatherApp() {
    let [Weather, setWeather] = useState({
        city: "Indore",
        FeelsLike: 23.77,
        Humidity: 46,
        Temp: 24.1,
        Weather: "haze"
    });
    let Updateinfo=(newInfo)=>{
        setWeather(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <Searchbox Updateinfo={Updateinfo} />
            <Info info={Weather} />
        </div>
    )
}
export default WeatherApp;