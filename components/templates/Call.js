import React from 'react';
import ContactForm from '../modules/call/ContactForm';

const Call = ({form , setForm}) => {
    return (
        <div className='px-4 px-lg-0'>
        <div className="text-center ff-vazir pt-4">
          <h2 style={{width:"fit-content"}} className='fs-1 d-flex justify-content-center my-3 py-1 mx-auto color-linear'>
            تماس با ما
          </h2>
          
          <p className="lead mb-4">
            سلام دوستان، من محمد لبافی هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :)
            <br />
             من در اینجا ضمن معرفی خودم، تجاربم از برنامه نویسی رو باهاتون به اشتراک می‌ذارم
          </p>
        </div>
        <h4 className='color-linear text-center pt-4'>راه های ارتباطی</h4>
        <div className='d-flex flex-column flex-lg-row align-items-cenrer justify-content-center pt-4 mb-4 mb-lg-0'>
            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
            <a rel='noreferrer' href='https://instagram.com/coding.lbf?igshid=NTc4MTIwNjQ2YQ==' className='social-link d-flex align-items-center'>
                    <span>instagram</span>
                    <i class="bi bi-instagram me-1"></i>
                </a>
            </div>
            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
            <a rel='noreferrer' href='mailto:labbaf2016@gmail.com' className='social-link d-flex align-items-center'>
                    <span>Email</span>
                    <i class="bi bi-envelope-fill me-1"></i>
                </a>
            </div>
            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
                <a rel='noreferrer' href='https://www.linkedin.com/in/mohammad-labbafi-04a772239' className='social-link d-flex align-items-center'>
                    <span>linkedin</span>
                    <i class="bi bi-linkedin me-1"></i>
                </a>
            </div>
        </div>
        <ContactForm form={form} setForm={setForm} />
    </div>
    );
};

export default Call;