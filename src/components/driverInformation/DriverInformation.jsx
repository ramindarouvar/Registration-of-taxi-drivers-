import React from 'react';

const DriverInformation = ({driver}) => {
    return ( 
        <div className='col-12 col-sm-6 col-lg-4 mb-3'>
            <div className='card personInfo'>
                <div className='text-center pt-3'>
                    <img src={driver.personPhotoUrl} id={`${driver.id}1`} 
                        className='w-50 card-img-top img-thumbnail' alt='admin-photo'
                    />
                </div>
                <div className='card-body text-light' style={{fontSize: "20px"}}>
                    <div className='row'>
                        <div className='col-12'>
                            نام: 
                                {" "}
                            <span className="mr-1 personText">{driver.firstname}</span>
                        </div>
                        <div className='col-12'>
                            نام خانوادگی:
                                {" "}
                            <span className="mr-1 personText">{driver.lastname}</span>
                        </div>
                    </div>
                    <hr className='bg-secondary'/>
                    نشانی:
                    <br/>
                        {" "}
                    <span className="mr-1 personText">{driver.address}</span>
                    <hr className='bg-secondary'/>
                    <div className='text-center'>
                        تصویر گواهینامه
                    </div>
                        {" "}
                    <div className='text-center'>
                        <a href={`${driver.dLicenseCardImageUrl}`} target="_blank">
                            <img src={`${driver.dLicenseCardImageUrl}`} id={`${driver.id}2`} 
                                className='w-50 mt-3 img-thumbnail' alt='admin-photo'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DriverInformation;