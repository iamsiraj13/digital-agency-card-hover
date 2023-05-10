import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative w-full  ">
        {/* header text  */}
        <div className="relative">
          <h3 className="text-[150px] font-extrabold text2 capitalize text-center font-poppins  ">
            digital agency
          </h3>
          <p className="font-inter drop-shadow-lg  text-center text-white text-[120px] capitalize font-bold mt-[-140px]">
            digital agency
          </p>
        </div>

        {/* grid content  */}
        <div
          className={`w-full h-[651px] transition-all duration-700 relative overflow-hidden`}
        >
          <div className={"w-full h-full absolute left-0 top-0 right-0"}>
            <img
              src={data[activeSlide].img}
              alt=""
              className={`${
                show === true
                  ? "w-full h-full object-cover img-anim  "
                  : "w-full h-full object-cover "
              }`}
            />
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="myswiper"
          >
            {data.map((data, index) => (
              <>
                <SwiperSlide
                  className=""
                  key={index}
                  onMouseEnter={() => {
                    setShow(true);
                    setActiveSlide(data.id);
                  }}
                  onMouseOut={() => setShow(false)}
                >
                  <div className="  h-full w-full   flex flex-col justify-end  text-white card transition-all duration-700 ">
                    <div className="card-inner z-40 p-4">
                      <div className="card-inner-top  relative">
                        <h3 className="text-[80px] leading-tight text font-inter font-extrabold">
                          0{data.id + 1}
                        </h3>
                        <h2 className="font-inter mt-[-10px] font-semibold text-[30px] text-black leading-tight">
                          {data.title}
                        </h2>
                      </div>
                      <p className="text-black font-inter ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellendus suscipit in unde commodi architecto?
                        Amet quo incidunt corporis dolorum voluptates.{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        <div>
          <h3 className="font-poppins font-extrabold text-[#27464D] text-[150px] text2 capitalize text-center">
            digital agency
          </h3>
        </div>
      </div>
    </>
  );
};

export default Slider;
