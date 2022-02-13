import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './../common/Header'
import Footer from './../common/Footer'

const MainLayout = props => {
    return ( 
        <Fragment>
            <Header />
            <main>
                <div>
                    {props.children}
                </div>
            </main>
            <Footer />
        </Fragment>
     );
}
 
export default MainLayout;