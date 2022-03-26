import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import SignUp from './../signup/SignUp';
import Landing from './../landing/Landing';

const FirstPage = ({match}) => {
    // get the last scroll position in The user's previous visit to the page 
    const pageYOffset = localStorage.getItem(`${match.path}pageYOffset`)
    // if pageYOffset is not saved in localStorage scrollTop=0 else: get the value from localStorage
    const scrollTop = pageYOffset ? pageYOffset : 0;
    // state for useEffect dependency for setting new value in localStorage when page is scrolling
    const [yOffset, setYOffset] = useState(scrollTop);

    useEffect(() => {
        // get last scrollTop from localStorge and scroll to saved position
        window.scroll({top: scrollTop});
        // event listener for set new value for yOffset state when page is scrolling
        document.addEventListener("scroll", () => {
            setYOffset(window.pageYOffset);
        })
    },[])
    
    useEffect(() => {
        // save page Y-offset when scrolling window 
        localStorage.setItem(`${match.path}pageYOffset`, window.pageYOffset)
    },[yOffset])
    
    return ( 
        <Fragment>
            <SignUp />
            <Landing />
        </Fragment>
     );
}
 
export default FirstPage;