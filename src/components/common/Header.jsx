import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = () => {
    const openNav = () => {
        // show side menue
        document.getElementById("mySidenav").style.right = "0";
    }
    const closeNav = (e) => {
        e.preventDefault();
        // hide side menu
        document.getElementById("mySidenav").style.right = "-250px";
    }
    return ( 
        <div className='sticky-top'>
            <div className='main-nav text-center d-none d-md-block'>
                <div className='nav-items-container h-100 mx-auto'>
                    <div className='float-right'>
                    <Link to="/">
                        <img className='w-100' style={{height: "70px"}} src='./../../../img/navLogo.png' />
                    </Link>
                    </div>
                    <div className='row h-100'>
                        <div className='navigation h-100 col-9'>
                            <nav className='row h-100 px-2'>
                                <Link to="/" className='px-2 px-lg-3 border-left border-dark'>خانه</Link>
                                <a href='#' className='px-2 px-lg-3 border-left border-dark'>خدمات</a>
                                <a href='#' className='px-2 px-lg-3 border-left border-dark'>خبرها</a>
                                <a href='#' className='px-2 px-lg-3 border-left border-dark'>درباره ما</a>
                                <a href='#' className='px-2 px-lg-3 border-left border-dark'>همکاری</a>
                                <a href='#' className='px-2 px-lg-3 border-dark'>ارتباط با ما</a>
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
            <div className='main-nav d-md-none'>
                <div id="mySidenav" class="sidenav">
                    <div className='row'>
                        <img className='col-8' style={{height: "70px"}} src='./../../../img/taxicar.png' />
                        <button class="col-4 closebtn text-center pl-4" onClick={closeNav}>&times;</button>
                    </div>
                    <Link to="/" onFocus={closeNav}>
                        <i className="fa fa-home pl-2" aria-hidden="true"></i>
                        خانه
                    </Link>
                    <a href="#" onFocus={closeNav}>
                        <i className="fa fa-cog pl-2" aria-hidden="true"></i>
                        خدمات
                    </a>
                    <a href="#" onFocus={closeNav}>
                        <i className="fa fa-newspaper-o pl-2" aria-hidden="true"></i>
                        خبر ها
                    </a>
                    <a href="#" onFocus={closeNav}>
                        <i className="fa fa-info-circle pl-2" aria-hidden="true"></i>
                        درباره ما
                    </a>
                    <a href="#" onFocus={closeNav}>
                        <i className="fa fa-handshake-o pl-2" aria-hidden="true"></i>
                        همکاری
                    </a>
                    <a href="#" onFocus={closeNav}>
                        <i className="fa fa-envelope pl-2" aria-hidden="true"></i>
                        ارتباط با ما
                    </a>
                    <Link to="/admin-panel" className='btn btn-primary' onFocus={closeNav} style={{fontSize: "25px"}}>
                        <i className="fa fa-users pl-2" aria-hidden="true"></i>
                        پنل مدیریت
                    </Link>                    
                </div>
                <button className='fa fa-bars btn h-100 px-4' 
                        style={{fontSize: "40px"}} 
                        onClick={openNav}>
                </button>   
            </div>
        </div>
     );
}
 
export default withRouter(Header);