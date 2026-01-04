



const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward' + '?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiYW5nZWxtYXJ0aW5jbHQiLCJhIjoiY21qejdxYThhMXp6azNjcTEzb29jNjg0cyJ9.Yc_znbLRML-EPoKKL9PjGQ'


   
    request ({ url:url, json: true}, (error, response) => {
        if (error){
            callback ('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0){
            callback ('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude:response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode