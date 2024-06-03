import CareTip from "../../../public/assets/01.png";
import CareTip2 from "../../../public/assets/02.png";
import CareTip3 from "../../../public/assets/03.png";
import CareTip4 from "../../../public/assets/04.png";

const BlogPost = () => {
  return (
    <div className="mt-32 cursor-pointer">
      <h1 className="text-center text-xl font-bold mb-4">Our Blog Posts</h1>
      <p className="text-center text-[#727272] ">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
        <div className="flex mt-8 gap-11">
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className=" font-bold pt-2">Find More →</button>
            </div>
          </div>
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip2} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="font-bold pt-2">Find More →</button>
            </div>
          </div>
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip3} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="font-bold pt-2">Find More →</button>
            </div>
          </div>
          <div className="bg-[#FBFBFB] shadow-xl hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img src={CareTip4} alt="img" className="w-full" />
            <div className="p-4">
              <p className="text-green-500">September 12 I Read in 6 minutes</p>
              <h1 className="text-xl font-medium">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="font-bold pt-2">Find More →</button>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
};

export default BlogPost;
