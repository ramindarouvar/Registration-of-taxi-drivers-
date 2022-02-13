export const initializeDriversLists = drivers => {
    return async dispatch => {
        var driversArray = [];
        Object.keys(drivers).map(key => {
            // push the object of driver info to the driver array
            driversArray.push(drivers[key])
        })
        // array of objects
        const allDrivers = driversArray;
        await dispatch({type: "INIT", payload: allDrivers})
    }
} 
export const addDriver = (drivers, newDriver) => {
    return async dispatch => {
    // push the object of new driver info to the driver array
        drivers.push(newDriver);
        // array of objects
        const allDrivers = drivers;
        // update drivers array in redux store
        await dispatch({type: "ADD_DRIVER", payload: allDrivers});
    }
}
