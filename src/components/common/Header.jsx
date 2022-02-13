import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = () => {
    return ( 
        <div className='sticky-top'>
            <div className='main-nav text-center'>
                <div className='w-75 h-100 mx-auto'>
                    <div className='float-right'>
                    <Link to="/">
                        <img className='w-100' style={{height: "70px"}} src='./../../../img/navLogo.png' />
                    </Link>
                    </div>
                    <div className='row h-100'>
                        <div className='navigation h-100 col-9'>
                            <nav className='row h-100 px-2'>
                                <Link to="/" className='px-3'>خانه</Link>
                                <a href='#' className='px-3'>خدمات</a>
                                <a href='#' className='px-3'>خبرها</a>
                                <a href='#' className='px-3'>درباره ما</a>
                                <a href='#' className='px-3'>همکاری</a>
                                <a href='#' className='px-3'>ارتباط با ما</a>
                            </nav>
                        </div>
                        <div className='col-3 p-2'>
                            <Link to="/admin-panel" className='btn btn-primary' style={{fontSize: "25px"}}>
                              پنل مدیریت
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(Header);