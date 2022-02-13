import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import SignUp from './../signup/SignUp';
import Landing from './../landing/Landing';

const FirstPage = () => {
    return ( 
        <Fragment>
            <SignUp />
            <Landing />
        </Fragment>
     );
}
 
export default FirstPage;