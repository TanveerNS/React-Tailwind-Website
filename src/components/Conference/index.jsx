import img1 from "../../assets/conf/dev-tools.png";
import img2 from "../../assets/conf/displays.png";
import img3 from "../../assets/conf/ecmascript.png";
import img4 from "../../assets/conf/jquery.png";

const Conference = () => {
  return (
    <div className="bg-[#071c22]">
      <div className="flex justify-center items-center pt-28">
        <div className="w-full md:w-[80%] 2xl:w-[60%] flex flex-col gap-4">
          <h4 className="text-[#63d9c9] text-3xl">The key topics of focus for the jQuery Conference 2025 are:</h4>
          <div className="w-full flex flex-wrap mt-20">
            <div className="flex-1 flex-wrap">
              <div className="flex gap-8">
                <img src={img1} alt="1" />
                <div className="text-white">
                  <h4 className="text-2xl font-semibold">DevTools: State of the Union</h4>
                  <p className="pr-12">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature It has roots in a piece of classical Latin literature </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-wrap">
              <div className="flex gap-8 ">
                <img src={img4} alt="1" />
                <div className="text-white">
                  <h4 className="text-2xl font-semibold">DevTools: State of the Union</h4>
                  <p className="pr-12">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature It has roots in a piece of classical Latin literature </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap mt-12">
            <div className="flex-1 flex-wrap">
              <div className="flex gap-8">
                <img src={img3} alt="1" />
                <div className="text-white">
                  <h4 className="text-2xl font-semibold">DevTools: State of the Union</h4>
                  <p className="pr-12">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature It has roots in a piece of classical Latin literature </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-wrap">
              <div className="flex gap-8 ">
                <img src={img2} alt="1" />
                <div className="text-white">
                  <h4 className="text-2xl font-semibold">DevTools: State of the Union</h4>
                  <p className="pr-12">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature It has roots in a piece of classical Latin literature </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
