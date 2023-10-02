import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate()

  const checkLogin = (event) => {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <Fragment>
      <div className='vh-100 d-flex align-items-center justify-content-center'>
        <form onSubmit={checkLogin}>
          <button type='submit' className='btn btn-success'>Visit my Site</button>
        </form>
      </div>
    </Fragment>
    
  )
}

export default LoginPage;