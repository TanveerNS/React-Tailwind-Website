import img1 from "../../assets/conf/dev-tools.png";
import svg1 from "../../assets/svg/users-2-svgrepo-com.svg";
import './schedule.css'

const Schedule = () => {
  return (
    <div className="bg-[#071c22] pb-24">
      <div className="flex justify-center items-center pt-28 pb-12">
        <div className="w-full md:w-[80%] 2xl:w-[60%] flex flex-col gap-4">
          <h3 className="text-white text-5xl">The Schedule</h3>
          <p className="text-[#63d9c9] text-3xl font-light">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
          <div className="w-full flex flex-wrap gap-8 mt-12">
            <div className="flex-1 flex-wrap">
              <div className="flex flex-col gap-2 bg-[#0f3033] p-6 pb-12 relative sc1 overflow-hidden border-[#55decc] border-b-[8px]">
                <h3 className="text-xl text-white font-semibold">08:30 - Registration</h3>
                <p className="pr-12 text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                <img src={svg1} alt="image1" className="absolute bottom-0 right-0 scal w-24" />
              </div>
            </div>
            <div className="flex-1 flex-wrap">
              <div className="flex flex-col gap-2 bg-[#0f3033] p-6 pb-12 relative sc1 overflow-hidden border-[#55decc] border-b-[8px]">
                <h3 className="text-xl text-white font-semibold">08:30 - Registration</h3>
                <p className="pr-12 text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                <img src={img1} alt="image1" className="absolute bottom-0 right-0 scal w-24" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-8 mt-6">
            <div className="flex-1 flex-wrap">
              <div className="flex flex-col gap-2 bg-[#0f3033] p-6 pb-12 relative sc1 overflow-hidden border-[#55decc] border-b-[8px]">
                <h3 className="text-xl text-white font-semibold">08:30 - Registration</h3>
                <p className="pr-12 text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                <img src={svg1} alt="image1" className="absolute bottom-0 right-0 scal w-24" />
              </div>
            </div>
            <div className="flex-1 flex-wrap">
              <div className="flex flex-col gap-2 bg-[#0f3033] p-6 pb-12 relative sc1 overflow-hidden border-[#55decc] border-b-[8px]">
                <h3 className="text-xl text-white font-semibold">08:30 - Registration</h3>
                <p className="pr-12 text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                <img src={img1} alt="image1" className="absolute bottom-0 right-0 scal w-24" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-8 mt-6">
            <div className="flex-1 flex-wrap">
              <div className="flex flex-col gap-2 bg-[#0f3033] p-6 pb-12 relative sc1 overflow-hidden border-[#55decc] border-b-[8px]">
                <h3 className="text-xl text-white font-semibold">08:30 - Registration</h3>
                <p className="pr-12 text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                <img src={svg1} alt="image1" className="absolute bottom-0 right-0 scal w-24" />
              </div>
            </div>
            <div className="flex-1 flex-wrap">
              <div className="flex flex-col gap-2 bg-[#0f3033] p-6 pb-12 relative sc1 overflow-hidden border-[#55decc] border-b-[8px]">
                <h3 className="text-xl text-white font-semibold">08:30 - Registration</h3>
                <p className="pr-12 text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                <img src={img1} alt="image1" className="absolute bottom-0 right-0 scal w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
