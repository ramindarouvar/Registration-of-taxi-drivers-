import React from 'react';

const DriverInformation = ({driver}) => {
    return ( 
        <div className='col-4 mb-3'>
            <div className='card personInfo'>
                <img src={driver.personPhotoUrl} id={`${driver.id}1`} className='w-100 card-img-top img-thumbnail' alt='admin-photo'/>
                <div className='card-body text-light' style={{fontSize: "20px"}}>
                    <div className='row'>
                        <div className='col-5'>
                            نام: 
                                {" "}
                            <span className="mr-1 personText">{driver.firstname}</span>
                        </div>
                        <div className='col-7'>
                            نام خانوادگی:
                                {" "}
                            <span className="mr-1 personText">{driver.lastname}</span>
                        </div>
                    </div>
                    <hr className='bg-secondary'/>
                    نشانی:
                        {" "}
                    <span className="mr-1 personText">{driver.address}</span>
                    <hr className='bg-secondary'/>
                    تصویر گواهینامه:
                        {" "}
                    <a href={`${driver.dLicenseCardImageUrl}`} target="_blank">
                        <img src={`${driver.dLicenseCardImageUrl}`} id={`${driver.id}2`} className='w-100 mt-3 img-thumbnail' alt='admin-photo'/>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default DriverInformation;