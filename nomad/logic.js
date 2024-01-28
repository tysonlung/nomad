const vision = require('@google-cloud/vision');
const geolocation = require('geolocation-utils');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs landmark detection on the local file


async function regularLandmarkDetection(imageFilePath) {
    const [result] = await client.landmarkDetection(imageFilePath);
    const geoCoords = result.locations.latlng;
    const devCoords = getCurrentLocation;
    const temp = {geoCoords.latitude , geoCoords.longitude}
    const dist = geolocation.headingDistanceTo(temp,devCoords);
    if(result.landmarkAnnotations.score < .25) {
        return false
    }
    if(dist > 500) {
        return false
    }
    return devCoords
}

function getCurrentLocation() {
    position = geolocation.getCurrentPosition()
    return position
}


export {regularLandmarkDetection}