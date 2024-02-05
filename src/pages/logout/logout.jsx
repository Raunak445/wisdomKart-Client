import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {message} from 'antd'
import { useDispatch } from 'react-redux';
import { hideLoading } from '../../redux/features/alert';
function Logout() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  useEffect(() => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect to the home page
    navigate('/');
    dispatch(hideLoading)
    message.success("Logged out Successfully")
    window.location.reload()
    
  }, [history]);

  return (
    <div>

    dispatch(showLoading)
      <h2>Logging Out...</h2>
    </div>
  );
}

export default Logout;
