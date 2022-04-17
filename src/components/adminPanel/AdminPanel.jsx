import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import DriverInformation from '../driverInformation/DriverInformation';

const AdminPanel = ({match}) => {
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

    // get the drivers array from redux store
    const drivers = useSelector(state => state.drivers);
    return ( 
        <div className='my-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-3 px-3'>
                        <div className='card'>
                            <h3 className='text-center bg-info text-light py-1'>مدیریت</h3>
                            <div className='row'>
                                <div className='text-center'>
                                    <img src='./img/person3.jpg' className='w-75 rounded-circle img-thumbnail' alt='admin-photo'/>
                                </div>
                                <hr />
                                <div className='card-body' style={{fontSize: "20px"}}>
                                    نام مدیر: 
                                    {" "}
                                    <span className="mr-1 text-muted">احمد</span>
                                    <hr/>
                                    نام خانوادگی:
                                    {" "}
                                    <span className="mr-1 text-muted">رهنما</span>
                                    <hr/>
                                    شهر:
                                    {" "}
                                    <span className="mr-1 text-muted">اصفهان</span>
                                    <hr/>
                                    عنوان شغلی:
                                    {" "}
                                    <span className="mr-1 text-muted">مدیر تاکسیرانی</span>  
                                    <hr/>
                                    تاریخ عضویت:
                                    {" "}
                                    <span className="mr-1 text-muted">1385/02/12</span>
                                    <hr/>
                                    تاریخ آخرین بازدید:
                                    {" "}
                                    <span className="mr-1 text-muted">1400/10/25</span>
                                </div>

                                <a href="#" className='text-center btn btn-danger text-light py-1 rounded-0' style={{fontSize: "24px"}}>خروج</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-8 col-lg-9'>
                        <h1 className='text-center bg-success text-light py-2 rounded'>
                            اطلاعات رانندگان
                        </h1>
                        <div className='row'>
                            {drivers.map(driver => {
                                    // rendering a component for each driver information
                                    return (
                                        <DriverInformation key={driver.id} driver={driver} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;