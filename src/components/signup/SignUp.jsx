import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import uniqid from "uniqid";
import { addDriver } from '../../actions/driversActions';

const SignUp = () => {
    const [driverId, setDriverId]= useState();
    const [firstname, setFirstname]= useState();
    const [lastname, setLastname]= useState();
    const [phone, setPhone]= useState();
    const [personPhoto, setPersonPhoto]= useState();
    const [dLicenseCardImage, setDLicenseCardImage]= useState();
    const [address, setAddress]= useState();
    const [acceptTheRules, setAcceptTheRules] = useState()
    const [,forceUpdate] = useState();
    const dispatch = useDispatch();
    // get drivers array from redux store
    const drivers = useSelector(state => state.drivers);

    // setup react validator for this project
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "وارد کردن مقدار این قسمت الزامی است.",
            min: "مقدار وارد شده کوتاه است",
            numeric: "کاراکتر های ورودی باید عدد باشند.",
            accepted: "برای ثبت نام میبایست که، قوانین سایت را بپذیرید."
        },
        element: 
            message => 
                <span className="col-8 text-center position-relative" style={{color: "#ffbaba" ,fontSize: "12px", bottom: "4px"}}>
                    {message}
                </span>
    }))
    // uploading files from html input to brower localstorage
    const imageUpload = (uploadElement, id, imageNumber) => {
        setDriverId(id);
        const file = uploadElement.files[0];
        // unique key for saving value in localstorage
        const imageStorageKey = `${id}${uploadElement.getAttribute("name")}`;
        handleReadingFile(file).then(resultUrl => {
            localStorage.setItem(imageStorageKey , resultUrl);
            // get the saved image value from localstorage
            const imageUrl = localStorage.getItem(imageStorageKey);
            if(imageUrl){
                switch (imageNumber) {
                    // if the person photo uploaded to localstorage
                    case 1:
                        setPersonPhoto(imageUrl)
                        break;
                        case 2:
                    // if the driving license card photo uploaded to localstorage
                        setDLicenseCardImage(imageUrl)
                        break;
                    default:
                        break;
                }
            }
            else return null;
        });
    };
    //  handle reading file from input with FileReader()
    const handleReadingFile = (file) => {
        return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
        });
    }
    // form submission
    const handleRegister = e => {
        e.preventDefault();
        if(validator.current.allValid()){
            const newDriver = {
                id: driverId,
                firstname,
                lastname,
                phone,
                phone,
                address,
                personPhotoUrl:personPhoto,
                dLicenseCardImageUrl:dLicenseCardImage
            }
            // send the new driver to redux store
            dispatch(addDriver(drivers, newDriver));
            alert("با موفقیت ثبت نام کردید.")
            // reset the form input values
            e.target.reset();
        }
        else{
            // show error messages to user
            validator.current.showMessages();
            // force update to re-render and showing the validation messages
            forceUpdate(1);
        }
    }
    return ( 
        <div className='sign-up'>
            <div className='register-section m-auto rounded pb-2'>
                <h1 className='text-center text-light pt-2'>فرم عضویت</h1> 
                <form className='form-group' onSubmit={e => {handleRegister(e)}}> 
                        <div className='form-fields mx-auto'>
                            <div className='row justify-content-around'>
                                <input type="text" name="firstname" className="form-control col-8 mb-1" placeholder='نام'
                                        onChange={ e =>{
                                            setFirstname(e.target.value);
                                        }}
                                />
                                {
                                    validator.current.message("firstname", firstname, "required|min:3")
                                }
                                <input type="text" name="lastname" className="form-control col-8 mb-1" placeholder='نام خانوادگی'
                                        onChange={ e =>{
                                            setLastname(e.target.value);
                                        }}
                                />
                                {
                                    validator.current.message("lastname", lastname, "required|min:3")
                                }
                                <input type="tel" name="phone" className='form-control col-8 mb-1' pattern="[0-9]{11}" 
                                        placeholder='شماره همراه (مثلا: *******0913)'
                                        maxLength="11"
                                        onChange={ e =>{
                                            setPhone(e.target.value);
                                        }}
                                />
                                {
                                    validator.current.message("phone", phone, "required|numeric|min:11")
                                }
                                <div className='col-8 row justify-content-between p-0 mb-1'>
                                    <label className='text-light' htmlFor="#avatar">
                                        <small>
                                            عکس پرسنلی: 
                                        </small>
                                    </label>
                                    <input type="file" name="personalPhoto" id="avatar" className="form-control custom-file col-8" 
                                            accept=".png,.jpg,.bmp"
                                            placeholder='عکس پرسنلی: '
                                            onChange={ e =>{
                                                setPersonPhoto(e.target.value);
                                                const imgId = uniqid();
                                                imageUpload(e.target, imgId, 1)
                                            }}
                                    />
                                </div>
                                {
                                    validator.current.message("personalPhoto", personPhoto , "required")
                                }
                                <div className='col-8 row justify-content-between p-0 mb-1'>
                                    <label className='text-light' htmlFor="#avatar">
                                        <small>
                                            تصویر گواهینامه: 
                                        </small>
                                    </label>
                                    <input type="file" name="cardPhoto" id="avatar" className="form-control custom-file col-8"
                                            accept=".png,.jpg,.jpeg,.bmp" 
                                            placeholder='عکس پرسنلی: '
                                            onChange={ e =>{
                                                setDLicenseCardImage(e.target.value);
                                                const imgId = uniqid();
                                                imageUpload(e.target, imgId, 2)
                                            }}
                                    />
                                </div>
                                {
                                    validator.current.message("cardPhoto", dLicenseCardImage , "required")
                                }
                                <input type="text" name="address" className="form-control col-8 mb-1" placeholder='آدرس'
                                        onChange={ e =>{
                                            setAddress(e.target.value);
                                        }}
                                />
                                {
                                    validator.current.message("address", address , "required|min:10")
                                }
                                <div className='col-8 text-light text-center'>
                                    <input type="checkbox" name="rules" id="rulesAgree" className='ml-2' 
                                            onChange={e => {
                                                setAcceptTheRules(e.target.checked)
                                            }}
                                    />
                                    <label htmlFor="rulesAgree" className='rulesLabel text-justify mb-2'>
                                            <a href='#' className='text-warning'>
                                            قوانین سایت
                                            </a>
                                            {" "}
                                             را می پذیرم
                                    </label>
                                </div>
                                {
                                    validator.current.message("rules", acceptTheRules , "accepted")
                                }
                                <div className='col-8 text-center'>
                                    <button type="submit" className='btn btn-primary w-50' style={{fontSize: "24px"}}>ثبت نام</button>
                                </div>
                            </div>
                        </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;