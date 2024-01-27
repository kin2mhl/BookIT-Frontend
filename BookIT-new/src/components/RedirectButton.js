import React from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectButton({ path, buttonText }) {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate(path);
  }

  return (
    <button onClick={handleClick} className="relative text-17xl leading-[18px] font-aleo" style={{color: '#000000 ', backgroundColor:"#FFFFFF"}}>
      {buttonText}
    </button>
  );
}

export default RedirectButton;
