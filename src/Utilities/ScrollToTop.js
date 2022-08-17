
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { LocationContext } from "../context/Location";




import { LocationutilityContext } from "../context/Location";


export default function ScrollToTop() {
// console.log(LocationutilityContext)

const {currentLocation, updateCurrentLocation} = React.useContext(LocationutilityContext)

// console.log(currentLocation)
    // const {updateCurrentLocation} = React.useContext(LocationutilityContext)

    // const {Allproducts, setFavourite} = React.useContext(UserItemsContext)
  const { pathname } = useLocation();

  console.log(currentLocation)

  useEffect(() => {
    window.scrollTo(0, 0);
    updateCurrentLocation(pathname)

  }, [pathname]);

  return null;
}