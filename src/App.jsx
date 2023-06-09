import data from "./data";
// Import Swiper styles

// import required modules
import { useState } from "react";

export default function HeroSlider() {
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div>
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
          className={`w-full h-[551px] transition-all duration-700 relative overflow-hidden`}
        >
          <div className={"w-full h-[551px] transition-all duration-1000"}>
            <img
              src={data[id].img}
              alt="bg image"
              className={`${
                show === true
                  ? "w-full h-full object-cover animate__animated animate__bounce"
                  : "w-full h-full object-cover"
              }`}
            />
          </div>
          <div className="w-full h-full absolute left-0 top-0">
            <div className="grid grid-cols-4  ">
              {data.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="min-h-[551px] w-full border border-black flex flex-col justify-end  text-white card transition-all duration-700 "
                    onMouseEnter={() => {
                      setShow(true);
                      setId(item.id);
                    }}
                    onMouseLeave={() => setShow(false)}
                  >
                    <div className="card-inner z-40 p-4">
                      <div className="card-inner-top  relative">
                        <h3 className="text-[80px] leading-tight text font-inter font-extrabold">
                          {/* 0{item.id + 1} */}
                          01
                        </h3>
                        <h2 className="font-inter mt-[-10px] font-semibold text-[30px] text-black leading-tight">
                          {/* {item.title} */}
                          good morning something
                        </h2>
                      </div>
                      <p className="text-black font-inter ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellendus suscipit in unde commodi architecto?
                        Amet quo incidunt corporis dolorum voluptates.{" "}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-poppins font-extrabold text-[#27464D] text-[150px] text2 capitalize text-center">
            digital agency
          </h3>
        </div>
      </div>
    </>
  );
}
