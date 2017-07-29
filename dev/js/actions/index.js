export const selectPoi = (poiFeature) => {
    console.log("You clicked on POI: ", poiFeature.get('name'));
    return {
        type: 'POI_SELECTED',
        payload: poiFeature
    }
};
