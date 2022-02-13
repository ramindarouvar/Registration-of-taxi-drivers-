import React from 'react';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='row justify-content-around text-light py-4'>
                <div className='col-2 py-5'>
                    <img src='./img/footerLogo.png' className='img-fluid' />
                </div>
                <div className='col-2'>
                    <h3 className='footer-header pb-3'>دسترسی سریع</h3>
                    <ul className='px-3'>
                        <li>
                            <a href='#' className='footer-link'>خدمات</a>
                        </li>
                        <li>
                            <a href='#' className='footer-link'>خبر ها</a>
                        </li>
                        <li>
                            <a href='#' className='footer-link'>همکاری</a>
                        </li>
                    </ul>
                </div>
                <div className='col-2'>
                    <h3 className='footer-header pb-3'>درباره ما</h3>
                    <ul className='list-unstyled px-0'>
                        <li>
                            <small className='text-justify'>
                                لورم ایپسوم
                                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                طراحان گرافیک است.  . 
                            </small>
                        </li>
                    </ul>
                </div>
                <div className='col-2'>
                    <h3 className='footer-header pb-3'>تماس با ما</h3>
                    <ul className='px-3 list-unstyled'>
                        <li>
                                نشانی: 
                                <br />
                            <div className='pr-2'>
                                <small>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    {" "}
                                    ایران - شهر ... -
                                    خیابان ... - کوچه ... - پلاک 83 - طبقه همکف
                                </small>
                            </div>
                        </li>
                        <li>
                                شماره تماس: 
                                <br />
                            <div className='pr-2'>
                                <i class="fa fa-mobile" aria-hidden="true"></i>{" "}
                                <small>
                                    09952118746
                                </small>
                            </div>
                            <div className='pr-2'>
                                <small>
                                <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                                    09952118746
                                </small>
                            </div>
                        </li>
                        <li>
                                ایمیل: 
                                <br />
                            <div className='pr-2 d-inline'>
                                <small>
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                                    taxidb@taxirani.com
                                </small>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='col-2'>
                    <h3 className='footer-header pb-3'>شبکه اجتماعی</h3>
                    <div className='row justify-content-around mt-3'>
                        <a href='#' className='socialNetwork col-3'>
                            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href='#' className='socialNetwork col-3'>
                            <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href='#' className='socialNetwork col-3'>
                            <i class="fa fa-telegram fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href='#' className='socialNetwork col-3'>
                            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright py-3 text-center">
                © کلیه حقوق این سایت متعلق به رامین داروور  می‌باشد.
            </div>
        </div>
     );
}
 
export default Footer;