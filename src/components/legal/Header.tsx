import HeaderIcon from "../../assets/icons/legal-header.svg";

interface IProps {
  title: string;
  modifiedTime: string;
}
function Header({ title, modifiedTime }: IProps) {
  return (
    <div className="w-full h-40 sm:h-64 lg:h-72 relative overflow-hidden bg-[#022d2b]">
      <img src={HeaderIcon.src} className="w-full h-full object-cover" />
      <div
        className="w-3/5 h-full absolute left-0 top-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(to top right, rgba(2,45,43,0.93) 70.31%, rgba(2,45,43,0) 100%)",
        }}
      />
      <div className="flex flex-col justify-start items-start left-[16px] absolute top-10 w-full xl:left-40[x] xl:top-28[x] md:top-24 gap-2 md:gap-4 lg:gap-6 xl:gap-8 sm:top-20">
        <div className="w-full lg:mx-auto lg:max-w-7xl pb-6 pl-0 space-y-4 sm:pl-8 lg:pl-3 md:max-w-md md:space-y-5 lg:space-y-6 xl:space-y-7 lg:pr-0 md:pb-0">
          <p
            className="text-xs leading-4 sm:text-base sm:leading-4 md:text-base md:leading-6 lg:text-base lg:leading-6 font-medium tracking-wide text-white"
            data-primary="blue-600"
          >
            {modifiedTime}
          </p>
          <h1 className="text-[28px] leading-[34px] sm:text-[28px] sm:leading-[34px] md:text-5xl md:leading-[60px] lg:text-5xl lg:leading-[60px] tracking-tight text-white font-semibold sm:w-[800px]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
