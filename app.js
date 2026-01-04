

const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address){
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
    if (error){
        return console.log(error)
    } 
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
})
})
}


// const url = 'https://api.weatherstack.com/current?access_key=0ee9ae71a0f7391ee5a215714dcfa15c&query=Philadelphia&units=f'


// request({ url: url, json: true}, (error, response) => {

//     if (error){
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else{
        
//         console.log(response.body.current.weather_descriptions[0]+ '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out. ')
//     }

    
// })

// Geocoding 
// Address -> latitude/longitude -> Weather

// const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1IjoiYW5nZWxtYXJ0aW5jbHQiLCJhIjoiY21qejdxYThhMXp6azNjcTEzb29jNjg0cyJ9.Yc_znbLRML-EPoKKL9PjGQ'

// request({ url: geocodeURL, json: true}, (error, response) => {

//     if(error){
//         console.log('Unable to connect to location services!')
//     }  else if (response.body.features.length === 0){
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].geometry.coordinates[1]

//     const longitude = response.body.features[0].geometry.coordinates[0]

//     console.log(latitude, longitude)
//     }
    
// })


// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/search/geocode/v6/forward' + '?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiYW5nZWxtYXJ0aW5jbHQiLCJhIjoiY21qejdxYThhMXp6azNjcTEzb29jNjg0cyJ9.Yc_znbLRML-EPoKKL9PjGQ'

//     request ({ url:url, json: true}, (error, response) => {
//         if (error){
//             callback ('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0){
//             callback ('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude:response.body.features[0].geometry.coordinates[0],
//                 longitude: response.body.features[0].geometry.coordinates[1],
//                 location:response.body.features[0].place_name
//             })
//         }
//     })
// }






//weather api key
//http://api.weatherstack.com/current?key=0ee9ae71a0f7391ee5a215714dcfa15c&query=37.8267,-122.4233

// map box api key
 //https://api.mapbox.com/search/geocode/v6/forward?q=Philadelphia&access_token=pk.eyJ1IjoiYW5nZWxtYXJ0aW5jbHQiLCJhIjoiY21qejdxYThhMXp6azNjcTEzb29jNjg0cyJ9.Yc_znbLRML-EPoKKL9PjGQ

