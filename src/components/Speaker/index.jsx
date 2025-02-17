import img1 from "../../assets/profile/conference-speeker1-1.jpg";
import img2 from "../../assets/profile/conference-speeker2-1.jpg";
import img3 from "../../assets/profile/conference-speeker3-1.jpg";

const Speaker = () => {
  return (
    <div className="bg-[#071c22] border-t-4 border-[#ba1268]">
      <div className="flex justify-center items-center pt-12">
        <div className="w-full md:w-[80%] 2xl:w-[60%] flex flex-col gap-4">
          <h2 className="text-5xl mb-1 mt-12 font-semibold text-white">Headlining Speakers</h2>
          <p className="text-[#63d9c9] text-3xl">jQuery UK made its grand return to Oxford for the fourth consecutive year, showcasing the foremost luminaries in front-end development</p>
          <div className="w-full flex flex-wrap mt-16 text-white">
            <div className="flex-1 flex-wrap">
              <img src={img1} alt="1" />
              <h4 className="mt-4 text-2xl font-semibold">Olivia Thompson</h4>
              <h5 className="mt-1 mb-4 text-xl">CEO of Cool Company Inc.</h5>
              <p className="pr-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus nisi non nunc pharetra viverra nec eget ligula.</p>
            </div>
            <div className="flex-1 flex-wrap">
              <img src={img2} alt="1" />
              <h4 className="mt-4 text-2xl font-semibold">Olivia Thompson</h4>
              <h5 className="mt-1 mb-4 text-xl">CEO of Cool Company Inc.</h5>
              <p className="pr-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus nisi non nunc pharetra viverra nec eget ligula.</p>
            </div>
            <div className="flex-1 flex-wrap">
              <img src={img3} alt="1" />
              <h4 className="mt-4 text-2xl font-semibold">Olivia Thompson</h4>
              <h5 className="mt-1 mb-4 text-xl">CEO of Cool Company Inc.</h5>
              <p className="pr-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus nisi non nunc pharetra viverra nec eget ligula.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Speaker;
