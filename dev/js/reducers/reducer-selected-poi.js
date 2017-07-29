export default function (state = null, action) {
    switch (action.type) {
        case 'POI_SELECTED':
            return action.payload;
            break;
    }
    return state;
}
