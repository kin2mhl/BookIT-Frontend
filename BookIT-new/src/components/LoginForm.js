import Login from "./Login";

import RedirectButton from './RedirectButton';

const LoginForm = () => {
  return (
    <div className="absolute top-[130px] left-[500px] w-[484.6px] h-[64.7px] text-left text-13xl text-st font-aleo">
      
     <div><Login /></div> 
          <div className="absolute  left-[800px] w-[132px] h-[38px] text-left text-11xl text-st font-aleo">
            <div className="absolute top-[0%] left-[0%]">
            <RedirectButton path="/booking-page" buttonText="Booking"/>
            </div>
        </div>
        
        <div className="absolute  left-[1090px] w-[145.6px] h-[64.7px] text-left text-13xl text-st font-aleo">
     
        <RedirectButton path="/signup-page-ui-button" buttonText="Sign Up"/>
    </div>     
      
    </div>
  );
};

export default LoginForm;
