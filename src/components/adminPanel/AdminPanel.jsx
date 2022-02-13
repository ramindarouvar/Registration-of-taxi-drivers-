import React from 'react';
import { useSelector } from 'react-redux';
import DriverInformation from '../driverInformation/DriverInformation';

const AdminPanel = () => {
    // get the drivers array from redux store
    const drivers = useSelector(state => state.drivers);
    return ( 
        <div className='my-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 px-5'>
                        <div className='card'>
                            <h3 className='text-center bg-info text-light py-1'>پنل مدیریت</h3>
                                <img src='./img/person3.jpg' className='w-100  rounded-circle img-thumbnail' alt='admin-photo'/>
                            <hr />
                            <div className='card-body' style={{fontSize: "20px"}}>
                                نام: 
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
                    <div className='col-9'>
                        <h1 className='text-center bg-success text-light py-2 dInfoHeader'>
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