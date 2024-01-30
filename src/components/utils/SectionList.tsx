import Fade from "react-reveal/Fade";
import { ArrowIcon } from "@assets/icons";

interface IProps {
  incentives: {
    name: string;
    icon: JSX.Element;
    description: string;
    linkText: string;
    link?: string;
    action?: (i: string) => void;
  }[];
  type?: "grower" | "buyer";
}

export default function SectionList({ type = "grower", incentives }: IProps) {
  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Section Link"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "SectionLinkClick"
    // });
    // ReactPixel.track("Section Link", {});
  };

  return (
    <div className="mx-auto max-w-7xl px-8 py-4 md:py-5 sm:px-2 xl:py-16 xl:px-4">
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 xl:grid-cols-3 mb-20">
        {incentives.map((i, idx) => (
          <Fade
            bottom
            delay={500 + idx * 150}
            key={i.name}
            duration={1000 + idx * 150}
            distance="30px"
          >
            <div className="flex flex-col justify-between">
              <div className="flex flex-col justify-start">
                <div className="flex-shrink-0">{i.icon}</div>
                <div className="w-full mt-4 xl:mt-6 xl:w-auto">
                  <h3 className="text-2xl sm:text-[28px] font-bold text-gray-900">
                    {i.name}
                  </h3>
                  <p className="mt-4 text-xs sm:text-base xl:w-[373px] xl:h-20 xl:text-base xl:leading-6 text-custom_black-900">
                    {i.description}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-start flex-grow-0 flex-shrink-0 h-6 sm:mt-6 relative opacity-90 space-x-2 xl:space-x-3">
                <a
                  href={i.link || ""}
                  onClick={(e) => {
                    if (i.action) {
                      e.preventDefault();
                      i.action(i.name);
                    }
                    handleLinkClick();
                  }}
                  className={`text-base sm:text-[20px] font-bold text-center xl:block text-${type}-500 hover:cursor-pointer`}
                >
                  {i.linkText}
                </a>
                <ArrowIcon className={`text-${type}-500`} />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
