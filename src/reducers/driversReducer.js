export const driversReducer = (state=[], action) => {
    switch (action.type) {
        // initialization
        case "INIT":
            return [...action.payload]
        // add new driver info to the drivers array
        case "ADD_DRIVER":
            return [...action.payload]
        default:
            return state;
    }
}