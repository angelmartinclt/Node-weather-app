const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../../utils/geocode')
const forecast = require('../../utils/forecast')


const app = express()

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlers engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Angel Martin'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Angel Martin',
        aboutText: 'My name is Angel Martin and I am a coding apprentice building my technical skills. The creation of this weather application was a code along with Andrew Mead from the course "Learn Node.js". '
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpText: 'After typing a location on the weather page the application will provde the following data: daily weather condition, current temperature, feels like temperature and the chance of rain in desired location ',
        title: 'Help',
        name: 'Angel Martin'
    })
})

//app.com/weather
app.get('/weather', (req, res) =>{
    if (!req.query.address){
        return res.send ({
            error: 'You must provide an address!'
        })
    }

    const units = req.query.units || 'f'

    geocode (req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return res.send({error})
        }

        forecast(latitude, longitude, units, (error, forecastData) => {
            if (error){
                return res.send ({error})
            }

            res.send({
            forecast: forecastData,
            location,
            address: req.query.address,
            units: units

        })

    
        })
    })
})

app.get('/products', (req, res) =>{
    if (!req.query.search){
        return res.send ({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send ({
        products: []
    })
})

app.get('/help/:page', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Angel Martin',
        errorMessage: 'Help article not found.'
    })
})

app.use((req, res) => {
    res.render('404', {
        title: '404',
        name: 'Angel Martin',
        errorMessage: 'Page not found.'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
