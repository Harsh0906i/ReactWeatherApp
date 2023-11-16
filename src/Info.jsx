import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";

function Info({ info }) {
    let Img_url="";
    let hot_url = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let cold_url = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let rain_url = "https://images.unsplash.com/photo-1641048350661-c126137677d1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className='container'>
            <div className='box'>
                <Card sx={{ maxWidth: 1000 }}>
                    <CardMedia
                        sx={{ height: 140 }}

                        image={info.Humidity > 80 ? rain_url : info.temp > 20 ? hot_url : cold_url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>Temprature = {info.Temp}&deg;C </div>
                            <div>FeelsLike = {info.FeelsLike}&deg;C </div>
                            <div>Humidity = {info.Humidity} </div>
                            <div>Sky = {info.Weather} </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Info;