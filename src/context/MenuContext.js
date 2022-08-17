import React from "react";
const MenuContext = React.createContext()

function MenuContextProvider(props) {
    const [isAllitemMenu, setisAllitemMenu] = React.useState(false);
    const toggleisAllitemMenu = () => {
        setisAllitemMenu(prev => !prev)
    }

    const [isLoginModal, setisLoginModal] = React.useState(false);
  
    const toggleisLoginModal = () => {
        setisLoginModal(prev => !prev)
    }

    return (
    <MenuContext.Provider value={{isAllitemMenu, toggleisAllitemMenu, isLoginModal, toggleisLoginModal}} >
        {props.children}
    </MenuContext.Provider>
    )
 
}

export {MenuContext, MenuContextProvider}
