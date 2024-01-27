import ReserveBUtton from "../components/ReserveBUtton";
import SearchFormContainer from "../components/SearchFormContainer";
import RedirectButton from '../components/RedirectButton';

const BookingPage = () => {
  return (
    <div className="w-full relative bg-white h-[1521px] overflow-hidden text-left text-5xl text-black font-barlow-condensed">
      <div className="absolute top-[512px] left-[45px] w-[789px] h-[306px] text-11xl">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[666px] h-[306px] border-[1px] border-solid border-gray-200" />
        <img
          className="absolute top-[12px] left-[14.8px] rounded-mid w-[299.1px] h-[282px] object-cover"
          alt=""
          src="/roomimg-1@2x.png"
        />
        <ReserveBUtton propLeft="472px" />
        <b className="absolute top-[12px] left-[calc(50%_-_57.5px)] inline-block font-anek-bangla text-st1 w-[304px] h-14">
          <p className="m-0">Double Bed Room</p>
        </b>
        <div className="absolute top-[63px] left-[calc(50%_-_57.5px)] text-5xl inline-block w-[304px] h-14">{`1-2 Adults `}</div>
        <div className="absolute top-[145px] left-[calc(50%_+_90.5px)] inline-block w-[304px] h-[117px] text-29xl">
          <p className="m-0">₱ 3,200</p>
          <p className="m-0 text-base">+₱ 837 taxes and charges</p>
        </div>
      </div>
      <div className="absolute top-[862px] left-[39px] w-[666px] h-[306px]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[666px] h-[306px] border-[1px] border-solid border-gray-200" />
        <div className="absolute top-[63px] left-[calc(50%_+_4px)] inline-block w-[304px] h-14">{`1-2 Adults `}</div>
        <div className="absolute top-[130px] left-[calc(50%_+_152px)] inline-block w-[149px] h-[117px] text-29xl">
          <p className="m-0">₱ 7,523</p>
          <p className="m-0 text-base">+₱ 343 taxes and charges</p>
        </div>
        <b className="absolute top-[12px] left-[calc(50%_-_0px)] text-11xl inline-block font-anek-bangla text-st1 w-[304px]">
          Suite Room
        </b>
        <img
          className="absolute top-[11px] left-[12px] rounded-mid w-[302px] h-[284px] object-cover"
          alt=""
          src="/image-33@2x.png"
        />
        <ReserveBUtton propLeft="472px" />
      </div>
      <div className="absolute top-[512px] left-[725px] w-[818px] h-[306px]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[677px] h-[306px] border-[1px] border-solid border-gray-200" />
        <div className="absolute top-[68px] left-[calc(50%_-_61px)] inline-block w-[304px] h-[117px]">
          <p className="m-0">1 Adults</p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div className="absolute top-[145px] left-[calc(50%_+_105px)] inline-block w-[304px] h-[92px] text-29xl">
          <p className="m-0">₱ 1,800</p>
          <p className="m-0 text-base">+₱ 637 taxes and charges</p>
        </div>
        <img
          className="absolute top-[11px] left-[17px] rounded-mid w-[303px] h-[280px] object-cover"
          alt=""
          src="/image-34@2x.png"
        />
        <b className="absolute top-[12px] left-[calc(50%_-_70px)] text-11xl font-anek-bangla text-st1">
          Single Bed Room
        </b>
        <ReserveBUtton propLeft="483px" />
      </div>
      <div className="absolute top-[862px] left-[725px] w-[816px] h-[306px]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[677px] h-[306px] border-[1px] border-solid border-gray-200" />
        <b className="absolute top-[12px] left-[calc(50%_-_69px)] text-11xl inline-block font-anek-bangla text-st1 w-[329px]">
          Deluxe Double Bed Room
        </b>
        <div className="absolute top-[68px] left-[calc(50%_-_60px)] inline-block w-[304px] h-14">
          3-4 Adults
        </div>
        <div className="absolute top-[68px] left-[calc(50%_-_60px)] inline-block w-[304px] h-14">
          2-4 Adults
        </div>
        <img
          className="absolute top-[12px] left-[17px] rounded-mid w-[303px] h-[279px] object-cover"
          alt=""
          src="/image-35@2x.png"
        />
        <div className="absolute top-[130px] left-[calc(50%_+_104px)] inline-block w-[304px] h-[117px] text-29xl">
          <p className="m-0">₱ 11,586</p>
          <p className="m-0 text-base">+₱ 637 taxes and charges</p>
        </div>
        <ReserveBUtton propLeft="483px" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[366px] text-13xl text-st1 font-aleo">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[366px] object-cover"
          alt=""
          src="/backgroundimg@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[165.3px]"
          alt=""
          src="/navbar.svg"
        />
        <div className="absolute top-[63.2px] left-[1054px]">Login</div>
        <div className="absolute top-[63.7px] left-[857px] text-black inline-block w-[132px] h-[35.5px]">
          Bookings
        </div>
        <img
          className="absolute top-[104px] left-[859.4px] w-[131px] h-[8.5px]"
          alt=""
          src="/ellipse-35.svg"
        />
        <div className="absolute top-[60.6px] left-[1197px] w-[145.6px] h-[60.5px]">
        
          <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[145.6px] h-[60.5px] border-[1px] border-solid border-st1" />
          <RedirectButton path="/signup-page-ui-button" buttonText="Sign Up"/>
        </div>
        <div className="absolute top-[39px] left-[143px] w-52 h-[83px] text-51xl text-black font-baumans">
          
          <div className="absolute top-[0px] left-[0px]"> <RedirectButton path="/" buttonText="BookIT"/> </div>
        </div>
      </div>
      <SearchFormContainer />
    </div>
  );
};

export default BookingPage;
