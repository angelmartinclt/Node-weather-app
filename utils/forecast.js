
const request = require('request')

const forecast = (latitude, longitude, units, callback) => {
    

    const unitParam = units === 'c' ? 'm' : 'f'
    const unitLabel = units === 'c' ? 'Celsius' : 'Fahrenheit'
    
    const url = 'http://api.weatherstack.com/current?access_key=0ee9ae71a0f7391ee5a215714dcfa15c&query=' + latitude + ',' + longitude + '&units=f'



    request({url, json: true},(error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Throughout the day ' + body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. ' + 'There is a '+ body.current.precip + ' chance of rain ')
        }
    })
}

module.exports = forecast