import React from 'react';
import ContactForm from '../modules/call/ContactForm';

const Call = ({form , setForm}) => {
    return (
        <div className='px-4 px-lg-0'>
        <h4 style={{fontFamily:"KalamehWeb-Bold" , fontSize:"30px" , color:"#090736"}} className='text-center pt-3 pb-lg-2'>راه های ارتباطی</h4>
        <div className='d-flex flex-column flex-lg-row align-items-cenrer justify-content-center pt-4 mb-0 mb-lg-0'>
            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
            <a rel='noreferrer' href='https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg==' className='social-link d-flex align-items-center'>
                    <span>instagram</span>
                    <i class="bi bi-instagram me-1"></i>
                </a>
            </div>
            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
            <a rel='noreferrer' href='https://www.youtube.com/@English.with.Mobash' className='social-link d-flex align-items-center'>
                    <span>Youtube</span>
                    <i class="bi bi-youtube me-1"></i>
                </a>
            </div>
            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
                <a rel='noreferrer' href='https://api.whatsapp.com/send?phone=989383439244' className='social-link d-flex align-items-center'>
                    <span>Whatsapp</span>
                    <i class="bi bi-whatsapp me-1"></i>
                </a>
            </div>
        </div>
        {/* <ContactForm form={form} setForm={setForm} /> */}
    </div>
    );
};

export default Call;