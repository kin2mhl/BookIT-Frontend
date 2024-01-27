import DateInput from "./DateInput";

const SearchFormContainer = () => {
  return (
    <div className="absolute top-[320px] left-[343px] w-[737px] h-[92px] text-left text-17xl text-st font-anek-bangla">
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gainsboro w-[737px] h-[92px]" />
      <div className="absolute top-[7px] left-[481px] w-[249px] h-[79px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-blanchedalmond box-border border-[1px] border-solid border-black" />
        <div className="absolute top-[7.59%] left-[29.32%]">Search</div>
      </div>
      <DateInput />
    </div>
  );
};

export default SearchFormContainer;
