const DateInput = () => {
  return (
    <div className="absolute top-[6px] left-[10px] w-[407px] h-[79px] text-left text-9xl text-gray-100 font-anek-bangla">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-white box-border border-[1px] border-solid border-black" />
      <div className="absolute top-[17.72%] left-[21.13%]">
        Check In - Check Out
      </div>
      <img
        className="absolute h-[64.56%] w-[12.53%] top-[17.72%] right-[82.31%] bottom-[17.72%] left-[5.16%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/calendar-icon@2x.png"
      />
    </div>
  );
};

export default DateInput;
