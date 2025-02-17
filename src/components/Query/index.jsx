import img1 from "../../assets/png/jquery-mobile.png";

const Query = () => {
  return (
    <div className="bg-[#ba1268]">
      <div className="flex justify-center items-center py-20">
        <div className="w-full md:w-[80%] 2xl:w-[60%] flex">
          <div className="w-[30%]">
            <img src={img1} alt="image1" className="" />
          </div>
          <div className="w-[70%]">
            <h3 className="text-2xl font-semibold mb-2 text-white">Lorem Ipsum simply</h3>
            <h4 className="text-xl font-medium mb-6 text-white">Dummy text of the printing</h4>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
