import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./Searchbox.css"
import { useState } from 'react';

function Searchbox({ Updateinfo }) {
    let Key = "f90665aa649303da621ac320a0db926f";
    let [city, setcity] = useState("");
    let [err, seterr] = useState(false);
    let Api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;

    let change = (e) => {
        setcity(e.target.value);
    }

    let getweather = async () => {
        try {
            let res = await fetch(Api_url);
            let data = await res.json();
            console.log(data);

            let result = {
                city: data.name,
                Temp: data.main.temp,
                Humidity: data.main.humidity,
                FeelsLike: data.main.feels_like,
                Weather: data.weather[0].description
            }
            console.log(result);
            return result;
        }
        catch (err) {
            seterr(true);
        }
    }

    let submit = async (e) => {
        try {
            e.preventDefault();
            console.log(city);
            setcity("");
            let newInfo = await getweather();
            Updateinfo(newInfo);
        } catch (err) {
            seterr(true)
        }
    }

    return (
        <div className='searchbox'>
            <h3>Search for weather</h3>
            <form onSubmit={submit}>
                <TextField id='outlined-basic' label="City-name" variant='outlined' required value={city} onChange={change} />
                <br />
                <br />
                <Button variant='contained' type='submit'>Search</Button>
                {err && <p>no such place </p>}
            </form>
        </div>
    );
}
export default Searchbox;