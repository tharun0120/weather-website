const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ encodeURIComponent(latitude) +'&lon='+ encodeURIComponent(longitude) +'&lang=en&units=metric&APPID=f2b07e8f7e88fb9933540756100cc497'

    request({url, json:true}, (error, {body}) =>{

        if(error)
        {
            callback('Unable to connect to the weather services!')
         }
         else if(body.message){
            callback('Unable to find the location!')
        }
        else
        {
            callback(undefined,{
                forecast: body.weather[0].description + ' with a Temperature of '+ body.main.temp + ' degrees.',
                temp: body.main.temp,
                pressure: body.main.pressure,
                mintemp: body.main.temp_min,
                maxtemp: body.main.temp_max,
                desc: body.weather[0].description 
            })
        }
    })
}

module.exports = forecast