/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Dannstadt-Schauernheim"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              8.314075469970703,
              49.42750021620163
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Birkenheide"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              8.261032104492188,
              49.48150916826499
            ]
          }
        }
      ]
    }
}
