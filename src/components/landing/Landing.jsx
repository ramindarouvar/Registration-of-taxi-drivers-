import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Landing = () => {
    return ( 
        <Fragment>
            <div className='container my-5'>
                <div className='cards row justify-content-around'>
                    <div className='card mb-3 col-md-5 col-lg-3 px-0'>
                        <img className='card-img-top' src='./img/fani.jpg' alt="معاینه فنی"/>
                        <div className='card-body'>
                            <h3 className="card-title">معاینه فنی</h3>
                            <p className="card-text text-justify">
                                معاینه فنی خودرو روشی است که در بسیاری از کشورها توسط دولتهای ملی یا محلی اعمال شده‌است، که در آن یک وسیله نقلیه برای بازرسی از اطمینان از عدم مطابقت با مقررات حاکم بر ایمنی
                                 ، انتشار گازهای آلاینده یا هر دو مورد بازرسی قرار می‌گیرد.
                                 </p>
                        </div>
                    </div>
                    <div className='card mb-3 col-md-5 col-lg-3 px-0'>
                        <img className='card-img-top' src='./img/parvane.jpg' alt="پروانه تاکسی"/>
                        <div className='card-body'>
                            <h3 className="card-title">پروانه هوشمند تاکسی</h3>
                            <p className="card-text text-justify">
                                در پروانه هوشمند گواهی صحت، سلامت و تایید صلاحیت راننده، معاینه فنی و چک خودرو انجام در نظر گرفته می‌شود.
                                در این پروانه، مالکیت خودرو احراز شده و پس از آن پروانه صادر می‌شود.
                            </p>
                        </div>
                    </div>
                    <div className='card mb-3 col-md-11 col-lg-3 px-0'>
                        <img className='card-img-top' src='./img/nosazi.jpg' alt="طرح نوسازی"/>
                        <div className='card-body'>
                            <h3 className="card-title">طرح نوسازی</h3>
                            <p className="card-text text-justify">
                                در این طرح پس از اعلام نمایندگی‌های خودرو ساز، متقاضیان نسبت به تحویل خودروی فرسوده به مراکز اسقاط اقدام و ارزش گواهی اسقاط و
                                لاشه خودروی خود را 
                                نیز مطابق با قیمت‌های اعلام شده نسبت به نوع خودرو از مراکز اسقاط دریافت می‌کنند.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                    <h1 className='d-none d-md-block display-4 text-right'>
                        بانک اطلاعاتی رانندگان تاکسی
                    </h1>
                    <h1 className='d-block d-md-none display-5 text-right'>
                        بانک اطلاعاتی رانندگان تاکسی
                    </h1>
                    <p className='text-right'>
                        این وبسایت سامانه ای است برای ثبت اطلاعات رانندگان و دسترسی مدیر وبسایت به اطلاعات تجمیع شده.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <img src='./img/fani.jpg' className='w-100 d-none d-lg-block rightPics'/>
                        <img src='./img/fani.jpg' className='w-100 d-block d-lg-none rounded mb-3'/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h1>معاینه فنی</h1>
                        <p className='text-justify'>
                        معاینه فنی خودرو روشی است که در بسیاری از کشورها توسط دولتهای ملی یا محلی اعمال شده‌است، که در آن یک وسیله نقلیه برای بازرسی از اطمینان از عدم مطابقت با مقررات حاکم بر ایمنی
                                 ، انتشار گازهای آلاینده یا هر دو مورد بازرسی قرار می‌گیرد.
                        </p>
                    </div>
                </div>
                <hr className='my-5'/>
                <div className='row'>
                    <div className='col-12 d-block d-lg-none'>
                        <img src='./img/parvane.jpg' className='w-100 rounded mb-3'/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h1>پروانه هوشمند تاکسی</h1>
                        <p className='text-justify'>
                            در پروانه هوشمند گواهی صحت، سلامت و تایید صلاحیت راننده، معاینه فنی و چک خودرو انجام در نظر گرفته می‌شود. در این پروانه، مالکیت خودرو احراز شده و پس از آن پروانه صادر می‌شود.                        
                        </p>
                    </div>
                    <div className='d-none d-lg-block col-6'>
                        <img src='./img/parvane.jpg' className='w-100 leftPics'/>
                    </div>
                </div>
                <hr className='my-5'/>
                <div className='row mb-5'>
                    <div className='col-12 col-lg-6'>
                        <img src='./img/nosazi.jpg' className='w-100 d-none d-lg-block rightPics'/>
                        <img src='./img/nosazi.jpg' className='w-100 d-block d-lg-none rounded mb-3'/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h1>طرح نوسازی</h1>
                        <p className='text-justify'>
                        در این طرح پس از اعلام نمایندگی‌های خودرو ساز، متقاضیان نسبت به تحویل خودروی فرسوده به مراکز اسقاط اقدام و ارزش گواهی اسقاط و لاشه خودروی خود را نیز مطابق با قیمت‌های اعلام شده نسبت به نوع خودرو از مراکز اسقاط دریافت می‌کنند.
                        .
                        </p>
                    </div>
                </div>
            </div>
            <div className='subcribeNews text-center'>
                <h1 className='d-none d-sm-block text-venter text-light pt-5 pb-4'>
                    آیا می خواهید از آخرین خبر ها مطلع شوید؟
                </h1>
                <h3 className='d-block d-sm-none text-venter text-light pt-5 pb-4'>
                    آیا می خواهید از آخرین خبر ها مطلع شوید؟
                </h3>
                <div className='w-50 mx-auto'>
                    <form className='form-group input-group mx-auto' 
                            onSubmit={(e)=>{
                                e.preventDefault();
                            }}
                    >
                        <div className='input-group-prepend'>
                            <button type='submit' className='btn btn-warning d-none d-sm-block'>
                                عضویت 
                            </button>
                            <button type='submit' className='fa fa-paper-plane-o  btn btn-warning d-block d-sm-none'>
                            </button>
                        </div>
                        <input type="email" className="form-control text-center" placeholder='ایمیل (example@example.com)' />
                    </form>
                </div>
            </div>

                <div className='my-5'>
                    <div className='quotes container text-center'>
                        <div className='row justify-content-around'>
                            <div className='col-6 col-sm-4'>
                                <img src='./img/person2.jpg' className='img-thumbnail rounded-circle' />
                                <blockquote class="blockquote">
                                    <p class="mb-0">
                                      ”
                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                      در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.                                      “
                                    </p>
                                    <footer class="blockquote-footer">مهرداد کریمی</footer>
                                </blockquote>
                            </div>
                            <div className='col-6 col-sm-4 d-none d-sm-block'>
                                <img src='./img/person3.jpg' className='img-thumbnail rounded-circle' />
                                <blockquote class="blockquote">
                                    <p class="mb-0">
                                      ”
                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                      “
                                    </p>
                                    <footer class="blockquote-footer">آرش ایزدی</footer>
                                </blockquote>
                            </div>
                            <div className='col-6 col-sm-4'>
                                <img src='./img/person1.jpg' className='img-thumbnail rounded-circle' />
                                <blockquote class="blockquote">
                                    <p class="mb-0">
                                      ”
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                                      “
                                    </p>
                                    <footer class="blockquote-footer">سارا نوری</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
     );
}
 
export default Landing;