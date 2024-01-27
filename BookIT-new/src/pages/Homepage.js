import LoginForm from "../components/LoginForm";
import RedirectButton from "../components/RedirectButton";
const Homepage = () => {
  return (
    <div className="w-full relative bg-white h-[1023px] overflow-hidden text-left text-xl text-salmon font-poppins">
      <div className="absolute top-[-94px] left-[-427px] w-[1922.3px] h-[1079px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1922.3px] h-[872.6px]"
          alt=""
          src="/decore.svg"
        />
        <LoginForm />
        <div className="absolute top-[315px] left-[571px] w-[1178px] h-[764px]">
          <div className="absolute top-[125px] left-[0px] w-[676px] h-[423px]">
            <b className="absolute top-[0px] left-[0px] uppercase whitespace-pre-wrap">{`yOUR NUMBER ONE  LOUNGE SPOT `}</b>
            <div className="absolute top-[333px] left-[1px] text-base leading-[30px] font-medium text-slategray inline-block w-[477px]">
              A chic urban retreat, our hotel offers a perfect fusion of
              contemporary elegance and warm hospitality for an unforgettable
              stay.
            </div>
            <img
              className="absolute top-[103px] left-[310px] w-[261px] h-4"
              alt=""
              src="/decore.svg"
            />
            <b className="absolute top-[47px] left-[0px] text-[60px] tracking-[-0.04em] leading-[89px] font-volkhov text-st1">
              <p className="m-0">{`Experience luxury, `}</p>
              <p className="m-0">comfort, and impeccable</p>
              <p className="m-0">hospitality at our hotel.</p>
            </b>
          </div>
          <img
            className="absolute top-[0px] left-[413px] w-[765px] h-[764px] object-cover"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[103px] left-[145px] w-52 h-[83px] text-51xl text-black font-baumans">
       
        <div className="absolute top-[0px] left-[0px]"><RedirectButton path="/" buttonText="BookIT"/></div>
      </div>
    </div>
  );
};

export default Homepage;
