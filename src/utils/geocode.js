const request = require('request') 

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoid2VhdGhlcmFwaSIsImEiOiJja29samE1MWkwMDBrMm5vNGJpeG94b2s4In0.xPAzp3XQ_W2waZU3dqORYA&limit=1'

    request({url, json:true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!')
        }
        else if(body.message || body.features[0] == null) {
            callback('Unable to Find the Location!')
        }
        else
        {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
} 

module.exports = geocode