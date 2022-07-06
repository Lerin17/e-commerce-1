import React from "react";


const LocationutilityContext = React.createContext()

const LocationContextProvider = (props) => {

    const [currentLocation, setcurrentLocation] = React.useState();

    const updateCurrentLocation = (pathname) => {
        setcurrentLocation(pathname)
    }

    return (
        <LocationutilityContext.Provider value={{updateCurrentLocation, currentLocation}}>
            {props.children}
        </LocationutilityContext.Provider>
    )
}

export {LocationContextProvider, LocationutilityContext}