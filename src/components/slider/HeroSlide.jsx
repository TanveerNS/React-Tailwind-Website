import SlideOne from "../../assets/Abstract-Blue-Pink.jpg";

const HeroSlide = () => {
  return (
    <div className="relative w-full mt-24" style={{ background: "linear-gradient(to bottom,#071c22 100%,#071c22 100%)" }}>
      <div className="flex flex-wrap flex-1 min-h-[80vh]" style={{ backgroundImage: `url(${SlideOne})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="flex flex-wrap flex-1 justify-center items-end flex-col">
          <div className="w-[60%] text-white">
            <h3 className="text-5xl">
              Welcome to <span className="text-[#63d9c9] font-semibold">NS Conference</span>
            </h3>
            <h3 className="text-2xl my-6">The premier event for front-end developers, bringing together the largest community in the field.</h3>
            <h4 className="text-xl">
              The largest <span className="text-[#63d9c9]">front-end developer</span> conference
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap flex-1">
          <div class="w-full flex items-center justify-center">
            <form action="#" method="POST" className="bg-[#2d3e50c2] p-10 rounded-lg shadow-lg max-w-md w-full text-white">
              <h2 class="text-3xl font-bold mb-6">Get Notified</h2>
              <p className="mb-6">
                Stay ahead of the curve with exclusive updates from the jQuery Conference 2016. Plus, enjoy select special newsletters delivered straight to you just before the
                event
              </p>
              <div class="mb-4">
                <label for="username" class="block text-sm font-semibold">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  class="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your username"
                />
              </div>

              <div class="mb-6">
                <label for="password" class="block text-sm font-semibold">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                />
              </div>

              <div class="flex items-center mb-6">
                <input type="checkbox" id="remember" name="remember" class="h-4 w-4 text-indigo-500 rounded border-gray-300 focus:ring-indigo-500" />
                <label for="remember" class="ml-2 text-sm ">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                class="w-full bg-indigo-600 text-white p-3 rounded-md font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign up now
              </button>
              <p className="mt-6">Your privacy is important to us. Rest assured, we never share your personal information.</p>
              <p className="mt-2">For further details, please review our Privacy Policy</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
