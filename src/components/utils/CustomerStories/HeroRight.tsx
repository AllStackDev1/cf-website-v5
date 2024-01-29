import ReactPlayer from "react-player";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { Wrapper } from "..";
import { classNames } from "@utils/functions";
import { PlayIcon } from "@assets/icons";

interface IProps {
  url: string;
  isBuyer: boolean;
  thumbnail: string;
}

const HeroRight = ({ url, isBuyer, thumbnail }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full justify-center items-center md:w-1/2  h-full lg:pt-0 overflow-hidden">
      <Fade right duration={1000} delay={500} distance="30px">
        <div className="relative h-full w-full max-[1279px]:pl-10 lg:pr-0 pr-10 flex justify-center items-center">
          <div className="lg:w-[550px] lg:h-[450px] w-[285px] h-[272px] ">
            <div className="relative overflow-hidden w-full h-full">
              <div className="top-0 bottom-0 left-0 right-0 absolute flex items-center justify-center">
                <div
                  role="button"
                  onClick={() => setOpen(true)}
                  className="flex justify-center items-center h-14 w-14 shadow-md bg-white rounded-full"
                >
                  <PlayIcon
                    className={classNames(
                      isBuyer ? "text-buyer-500" : "text-grower-500",
                      "h-8 w-8"
                    )}
                  />
                </div>
              </div>
              <img
                src={thumbnail}
                alt="Video thumbnail"
                className="z-10 object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        <Wrapper
          isOpen={open}
          onClose={() => setOpen(false)}
          className="flex overflow-hidden rounded-md transition mx-auto lg:max-w-7xl w-[426px] h-[240px] md:w-[640px] md:h-[360px] xl:w-[1280px] xl:h-[720px]"
        >
          <ReactPlayer url={url} playing width="100%" height="100%" />
        </Wrapper>
      </Fade>
    </div>
  );
};

export default HeroRight;
