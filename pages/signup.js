import { useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        router.push('/tests'); // جایگزین '/destination' با مسیر مقصد خود کنید
      }
    }
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const initialData = {
      userName,
      userTests: {
        grammar: {
          A1: { userStatus: 'not-passed', userMark: '0' },
          A2: { userStatus: 'not-passed', userMark: '0' },
          B1: { userStatus: 'not-passed', userMark: '0' },
          B1Plus: { userStatus: 'not-passed', userMark: '0' },
          B2: { userStatus: 'not-passed', userMark: '0' },
          C1: { userStatus: 'not-passed', userMark: '0' },
        },
        public: {
           A1Low: { userStatus: 'not-passed', userMark: '0' },
            A1High: { userStatus: 'not-passed', userMark: '0' },
             B1low: { userStatus: 'not-passed', userMark: '0' },
              B2High: { userStatus: 'not-passed', userMark: '0' },
               C1Low: { userStatus: 'not-passed', userMark: '0' },
                C1High: { userStatus: 'not-passed', userMark: '0' },
                 C2Low: { userStatus: 'not-passed', userMark: '0' },
                  C2High: { userStatus: 'not-passed', userMark: '0' }
        },
      },
    };
    if (typeof window !== 'undefined') {
      localStorage.setItem('userName', userName);
      localStorage.setItem('userData', JSON.stringify(initialData));
    }
    router.push('/tests'); // جایگزین '/destination' با مسیر مقصد خود کنید
  };

  return (
    <div className="container page-padding-tops">
      <div className='pt-4 mt-4 mb-2 row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-7 col-lg-5 py-4 border my-4 rounded bg-light'>
            <h4 className='pt-4'>ثبت نام</h4>
      <p className='fw-bold text-black mt-4 mb-2'>برای شرکت در آزمونهای سایت، می‌بایست نام و نام خانوادگی خود را وارد کنید.</p>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder='نام و نام خانوادگی'
          />
        </Form.Group>
        <button className='border-0 py-3 px-3 mt-4 rounded text-white w-100' style={{backgroundColor:"#151D3B"}} type="submit">ثبت نام</button>
      </Form>
            </div>
      </div>
    </div>
  );
};

export default Signup;
