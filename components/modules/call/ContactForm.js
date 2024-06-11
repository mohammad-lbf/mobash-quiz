import React, { useState } from 'react';

const ContactForm = ({form , setForm}) => {
  const [status , setStatus] = useState("");

  const changeHandler = (e) => {

    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const clickHandler = async()=>{

    if(!form.name || !form.phoneNumber || !form.email || !form.subject || !form.messageContent){
      setStatus("لطفا همه ی فیلد ها را پر کنید")
      return;
  }
  const regex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  if(!regex.test(form.email)){
      setStatus("آدرس ایمیل نا معتبر است، لطفا یک ایمیل معتبر وارد کنید")
      return;
  }

    const res = await fetch("/api/message" , {
        method:"POST",
        body: JSON.stringify({form}),
        headers:{'content-type' : "application/json"}
    })
    const data = await res.json();
    if(data.status == "500"){
      setStatus("ارتباط با دیتابیس برقرار نشد")
  }
  if(data.status == "403"){
      setStatus("پیام شما ارسال نشد، لطفا اتصالتان را بررسی کرده و مجددا امتحان کنید")
  }
  if(data.status == "201"){
      setStatus("پیام شما ثبت شد. با تشکر")
  }
  }


  return (
    <div className='container mt-70'>
        <div className='row justify-content-center'>
            <div className='col-xl-10 col-lg-12'>
        <div className="form-contact">
      <div className="text-center">
        <h3 className="color-linear d-inline-block mb-10">ارسال پیام</h3>
        <p className="text-xs color-gray-500">آدرس ایمیل شما منتشر نخواهد شد. فیلد های ضروری با * علامت گذاری شده اند</p>
      </div>
      <div className="row mt-30">
        <div className="col-lg-6">
          <div className="form-group">
            <input onChange={changeHandler} name="name" value={form.name}  className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="نام*" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input onChange={changeHandler} name="email" value={form.email}  className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="ایمیل*" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input onChange={changeHandler} name="phoneNumber" value={form.phoneNumber}  className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="شماره تلفن*" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input onChange={changeHandler} name="subject" value={form.subject}  className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="موضوع*" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <textarea  onChange={changeHandler} name="messageContent" value={form.messageContent} className="form-control bg-gray-850 border-gray-800 color-gray-500" rows="5" placeholder="متن پیام*"></textarea>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex flex-column align-items-center mb-50">
            <button onClick={clickHandler} className="btn btn-linear btn-load-more btn-radius-8 hover-up"><i className="fi-rr-arrow-small-right"></i>ارسال پیام</button>
            <span style={{fontSize:"15px"}} className='article-subTitle text-center w-100 mb-lg-4 mb-2 mt-3'>{status}</span>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
