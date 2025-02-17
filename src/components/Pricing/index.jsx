import img1 from "../../assets/png/keycdn.png";
import img2 from "../../assets/png/mailjet.png";
import img3 from "../../assets/png/mozilla.png";
import Faq from "../Faq";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="bg-[#071c22]">
      <div className="flex justify-center items-center pt-28">
        <div className="w-full md:w-[80%] 2xl:w-[60%] flex flex-col gap-4">
          <h3 className="text-5xl text-white">Conference Pricing</h3>
          <p className="text-[#63d9c9] text-3xl font-light">
            Presented below is a selection of exclusive conference registration options. Ensure you register early to take advantage of discounted fees and secure your spot at this
            premier event.
          </p>
          <div className="w-full flex flex-wrap mt-12">
            <div className="flex-1 flex-wrap">
              <div className="bg-black text-white border border-white">
                <h4 className="mt-12 text-2xl font-semibold text-center">Conference: Day 1</h4>
                <div className="text-center">
                  <h4 className="headprice">
                    <sup className="text-3xl">$</sup> <span className="text-[6rem] font-semibold">12</span> <sub className="text-3xl">p.p.</sub>
                  </h4>
                </div>
                <p className="xl:px-8 md:px-4 px-1 text-center mt-6 text-lg md:text-xl ">This ticket provides exclusive access to the conference on April 21st only.</p>
                <div className="w-full text-center">
                  <button className="bg-[#63d9c9] text-black mt-12 mb-16 font-semibold px-10 py-4 rounded">Sign Up Now</button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-wrap">
              <div className="bg-black text-white border border-white">
                <h4 className="mt-12 text-2xl font-semibold text-center">Conference: Day 1</h4>
                <div className="text-center">
                  <h4 className="headprice">
                    <sup className="text-3xl">$</sup> <span className="text-[6rem] font-semibold">12</span> <sub className="text-3xl">p.p.</sub>
                  </h4>
                </div>
                <p className="xl:px-8 md:px-4 px-1 text-center mt-6 text-lg md:text-xl ">This ticket provides exclusive access to the conference on April 21st only.</p>
                <div className="w-full text-center">
                  <button className="bg-[#63d9c9] text-black mt-12 mb-16 font-semibold px-10 py-4 rounded">Sign Up Now</button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-wrap">
              <div className="bg-black text-white border border-white">
                <h4 className="mt-12 text-2xl font-semibold text-center">Conference: Day 1</h4>
                <div className="text-center">
                  <h4 className="headprice">
                    <sup className="text-3xl">$</sup> <span className="text-[6rem] font-semibold">12</span> <sub className="text-3xl">p.p.</sub>
                  </h4>
                </div>
                <p className="xl:px-8 md:px-4 px-1 text-center mt-6 text-lg md:text-xl ">This ticket provides exclusive access to the conference on April 21st only.</p>
                <div className="w-full text-center">
                  <button className="bg-[#63d9c9] text-black mt-12 mb-16 font-semibold px-10 py-4 rounded">Sign Up Now</button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl text-[#63d9c9] mt-20 mb-8 font-light">Our excellent sponsors make jQuery Conference possible:</h3>

          <div className="w-full flex flex-wrap mt-12 gap-8">
            <div className="flex-1 flex-wrap bg-[#0f3033] py-8 px-12">
              <img src={img1} alt="1" />
            </div>
            <div className="flex-1 flex-wrap bg-[#0f3033] py-8 px-12">
              <img src={img2} alt="1" />
            </div>
            <div className="flex-1 flex-wrap bg-[#0f3033] py-8 px-12">
              <img src={img3} alt="1" />
            </div>
          </div>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
