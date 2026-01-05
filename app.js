const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address){
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (error){
        return console.log(error)
    } 
    
    forecast(latitude, longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
})
})
}









//weather api key
//http://api.weatherstack.com/current?key=0ee9ae71a0f7391ee5a215714dcfa15c&query=37.8267,-122.4233

// map box api key
 //https://api.mapbox.com/search/geocode/v6/forward?q=Philadelphia&access_token=pk.eyJ1IjoiYW5nZWxtYXJ0aW5jbHQiLCJhIjoiY21qejdxYThhMXp6azNjcTEzb29jNjg0cyJ9.Yc_znbLRML-EPoKKL9PjGQ

