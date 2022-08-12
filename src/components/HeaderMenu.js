import React from "react";
import { Button, IconButton } from "@mui/material";

function HeaderMenu(props) {
    const [currentSelectedMenuItem, setcurrenSelectedtMenuItem] = React.useState();
    const [currentContentDisplayed, setcurrentContentDisplayed] = React.useState('');
    const [MenuItemContentArray, setMenuItemContentArray] = React.useState([]);

    const MenuButtons = (props) => (
        <Button onClick={()=>setcurrenSelectedtMenuItem(props.name)} style={{
                // webkitTextStroke : '3px gray'
        }} variant="text" className="hover:bg-gradient-to-l from-white via-gray-600 to-white transition-all font-headers border-blue-900 hover:text-black hover:scale-110 text-gray-300 text-3xl font-bold">
            {props.name}
        </Button>
    )

// let currentContent = <div>
//     damn no cotent
// </div>

    const WeAre = <div className="text-4xl mt-6  mx-10" >
        <div className="mb-6" >Boyish!</div>
        <div className="text-2xl" >
           <span className="text-6xl font-gothic border-2 py-0 px-1 text-red-600" >T</span>
           <span className="font-elegant font-normal" >
           he company was started in 1913 by Mario Prada and his brother Martino as a leather goods shop – Fratelli Prada – in Milan, Italy.[2][3] Initially, the shop sold animal goods and imported English steamer trunks and handbags.

Mario Prada did not believe that women should have a role in business, and so he prevented female family members from entering his company. Ironically, Mario's son had no interest in the business, so it was Mario's daughter Luisa who succeeded Mario and ran Prada for almost twenty years. Luisa's daughter, Miuccia Prada, joined the company in 1970, eventually taking over from Luisa in 1978.[citation needed]
            </span> 
{/* 
Miuccia began making waterproof backpacks out of Pocono, a nylon fabric.[2] She met Patrizio Bertelli in 1977, an Italian who had begun his own leather goods business at the age of 24, and he joined the company soon after. He advised Miuccia on company business, which she followed. It was his advice to discontinue importing English goods and to change the existing luggage */}
        </div>
    </div>

    React.useEffect(() => {
        setMenuItemContentArray(
            [{name:'we are!',
              content: WeAre}])
    }, []);

    React.useEffect(() => {
        const getCurrentContent = MenuItemContentArray.find(item => item.name == currentSelectedMenuItem )
        setcurrentContentDisplayed(getCurrentContent)
    }, [currentSelectedMenuItem]);
    
    // console.log()

    return (
        <div className={`${props.open} bg-blue-900 h-screen text-white text-6xl font-bold flex w-full`} >
        <div className={`${currentContentDisplayed?'hidden':'block'} ml-16 mt-10 w-full flex flex-col items-start lg:w-1/2`}>
            <MenuButtons
            name='we are!'
            handleClick='one'
            />
            <Button variant="text" className="hover:bg-transparent transition-all hover:scale-110 text-white text-5xl font-bold">
            Favorite
            </Button>

            {/* <Button variant="text" className="hover:bg-transparent transition-all hover:scale-110 text-white text-5xl font-bold">
            Cart
            </Button> */}

            <MenuButtons
            name='cart'
            handleClick='one'
            />

            <MenuButtons
            name='collections!'
            handleClick='one'
            />

            <MenuButtons
            name='campaigns!'
            handleClick='one'
            />

            <MenuButtons
            name='contact us'
            handleClick='one'
            />

            <MenuButtons
            name='Need help'
            handleClick='one'
            />

            <MenuButtons
            name='we are'
            handleClick='one'
            />

            <MenuButtons
            name='wish list'
            handleClick='one'
            />
        </div>

        <div className={`${currentSelectedMenuItem && currentContentDisplayed?' block w-full':'hidden'}`} >
            <div className="flex animate-slideDown" >
                
                <div className="w-10/12" >{currentContentDisplayed? currentContentDisplayed.content:'xx'}</div>
                <div onClick={()=>{setcurrentContentDisplayed(null)
                setcurrenSelectedtMenuItem(null)
                }} className="item-end w-1/12" >
                    <IconButton>
                    <i class="ri-close-line"></i>
                    </IconButton>
                    </div>
            </div>
            
        </div>

        <div className="bg-white hidden lg:block lg:w-1/2" >
            x
        </div>

    </div> 
    )
}

export default HeaderMenu