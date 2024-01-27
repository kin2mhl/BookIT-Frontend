import { useMemo } from "react";

const ReserveBUtton = ({ propLeft }) => {
  const reserveBUttonStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[224px] left-[472px] w-[169.2px] h-[49px] text-left text-7xl text-st font-anek-bangla"
      style={reserveBUttonStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-blanchedalmond" />
      <div className="absolute top-[0%] left-[24.41%]">Reserve</div>
    </div>
  );
};

export default ReserveBUtton;
