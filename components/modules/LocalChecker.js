import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Modal, Button, Form } from 'react-bootstrap';

const CardButton = ({slug}) => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const handleButtonClick = () => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      router.push(`/tests/${slug}`);
    } else {
      setShowModal(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const initialData = {
      userName,
      userTests: {
        grammer: {
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
            B1Low: { userStatus: 'not-passed', userMark: '0' },
            B2High: { userStatus: 'not-passed', userMark: '0' },
            C1Low: { userStatus: 'not-passed', userMark: '0' },
            C1High: { userStatus: 'not-passed', userMark: '0' },
            C2Low: { userStatus: 'not-passed', userMark: '0' },
            C2High: { userStatus: 'not-passed', userMark: '0' }
        },
      },
    };
    localStorage.setItem('userName', userName);
    localStorage.setItem('userTests', JSON.stringify(initialData));
    setShowModal(false);
    router.push(`/tests/${slug}`); // جایگزین '/destination' با مسیر مقصد خود کنید
  };

  return (
    <div>
      <button style={{borderRadius:"0"}} className="btn btn-linear d-inline-block hover-shadow w-100" onClick={handleButtonClick}>شرکت در آزمون</button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardButton;
