import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import data from "./data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { useState } from "react";

export default function HeroSlider() {
  const [id, setId] = useState(0);
  console.log(id);

  return (
    <>
      <div>
        <div className="relative">
          <h3 className="text-[150px] font-bold text2 capitalize text-center">
            digital agency
          </h3>
          <p className="text-center text-white text-[120px] capitalize font-bold mt-[-140px]">
            digital agency
          </p>
        </div>

        {/* grid content  */}
        <div
          className={`bg-no-repeat  bg-cover bg-center w-full h-[551px] transition-all duration-700 overflow-hidden`}
          style={{
            backgroundImage: `url(${data && data[id].img})`,
          }}
        >
          <div className="w-full h-full  ">
            <div className="grid grid-cols-4  ">
              {data.map((item, index) => (
                <>
                  <div
                    className="min-h-[551px] w-full border border-black flex flex-col justify-end  text-white card "
                    onMouseEnter={() => setId(index)}
                  >
                    <div className="card-inner z-40 p-4">
                      <div className="card-inner-top  ">
                        <h3 className="text-[80px] font-bold leading-tight text">
                          0{item.id}
                        </h3>
                        <h2 className="text-[30px] font-semibold text-black leading-tight">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-black ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellendus suscipit in unde commodi architecto?
                        Amet quo incidunt corporis dolorum voluptates.{" "}
                      </p>
                    </div>
                    {/* <img
                    src={item.img}
                    className="w-full h-[651px] object-cover"
                    alt=""
                  /> */}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[150px] font-bold text2 capitalize text-center">
            digital agency
          </h3>
        </div>
      </div>
    </>
  );
}
