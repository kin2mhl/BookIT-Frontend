import CreateAccount from "../components/CreateAccount";
import RedirectButton from "../components/RedirectButton";
const SignUpPageUIButton = () => {
  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-51xl text-black font-aleo">
      <img
        className="absolute top-[-37.8px] left-[-60px] w-[944.6px] h-[888.9px]"
        alt=""
        src="/ellipse-33.svg"
      />
      <div className="absolute top-[calc(50%_-_464px)] left-[154px] w-[1167px] h-[83px] font-baumans">
        <div className="absolute top-[calc(50%_-_41.5px)] left-[0px] w-52 h-[83px]">
          
          <div className="absolute top-[calc(50%_-_41.5px)] left-[0px]">
          <RedirectButton path="/" buttonText="BookIT"/>
          </div>
        </div>
        <div className="absolute top-[18px] left-[1065px] w-[102px] h-10 text-center text-[17px] text-st font-aleo">
          <b className="absolute top-[22.5%] left-[29.41%]">{`Login `}</b>
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-4.svg"
          />
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_381px)] left-[530px] w-[383px] h-[88px] text-center text-[40px]">
        <b className="absolute top-[calc(50%_-_44px)] left-[0px]">
          Create your Account
        </b>
        <div className="absolute top-[calc(50%_+_22px)] left-[14px] text-lg">
          Create an account to have access to booking
        </div>
      </div>
      <div className="absolute top-[253px] left-[458px] w-[524px] h-[476.6px] text-base">
        <div className="absolute top-[0px] left-[0px] w-[522.2px] h-[70.5px]">
          <div className="absolute top-[28px] left-[0px] w-[522.2px] h-[42.5px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)]" />
          </div>
          <div className="absolute top-[calc(50%_-_35.25px)] left-[0px] font-light">
            First Name
          </div>
        </div>
        <div className="absolute top-[203.1px] left-[1.8px] w-[522.2px] h-[70.5px]">
          <div className="absolute top-[28px] left-[0px] w-[522.2px] h-[42.5px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)]" />
          </div>
          <div className="absolute top-[calc(50%_-_35.25px)] left-[0px] font-light">
            Email
          </div>
        </div>
        <div className="absolute top-[406.1px] left-[0px] w-[522.2px] h-[70.5px]">
          <div className="absolute top-[28px] left-[0px] w-[522.2px] h-[42.5px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)]" />
          </div>
          <div className="absolute top-[calc(50%_-_35.25px)] left-[0px] font-light">
            Password
          </div>
        </div>
        <div className="absolute top-[304.6px] left-[1.8px] w-[317.7px] h-[70.5px]">
          <div className="absolute top-[28px] left-[0px] w-[317.7px] h-[42.5px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)]" />
          </div>
          <div className="absolute top-[calc(50%_-_35.25px)] left-[0px] font-light">
            Phone Number
          </div>
        </div>
        <div className="absolute top-[101.5px] left-[1.8px] w-[522.2px] h-[70.5px]">
          <div className="absolute top-[28px] left-[0px] w-[522.2px] h-[42.5px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)]" />
          </div>
          <div className="absolute top-[calc(50%_-_35.25px)] left-[0px] font-light">
            Last Name
          </div>
        </div>
      </div>
      <CreateAccount />
      <b className="absolute top-[851px] left-[454px] text-lg inline-block text-center w-[533px] h-[62px]">
        <span>{`By creating an account you agree to our `}</span>
        <span className="text-royalblue">Terms of Service</span>
        <span>{` and `}</span>
        <span className="text-royalblue">{`Privacy Policy `}</span>
      </b>
    </div>
  );
};

export default SignUpPageUIButton;
