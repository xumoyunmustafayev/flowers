import CareTip from "../../../public/assets/01.png";
import CareTip2 from "../../../public/assets/02.png";
import CareTip3 from "../../../public/assets/03.png";
import CareTip4 from "../../../public/assets/04.png";

const BlogPost = () => {
  return (
    <div className="mt-32 cursor-pointer">
      <h1 className="text-center text-xl font-bold mb-4">Our Blog Posts</h1>
      <p className="text-center text-[#727272]">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {[CareTip, CareTip2, CareTip3, CareTip4].map((img, index) => (
          <div
            key={index}
            className="bg-[#FBFBFB] shadow-xl rounded-lg overflow-hidden hover:bg-green-100 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <img src={img} alt={`care tip ${index + 1}`} className="w-full" />
            <div className="p-4">
              <p className="text-green-500">September 12 | Read in 6 minutes</p>
              <h1 className="text-xl font-medium">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-[#727272]">
                Cacti and succulents are easy care plants for any home or patio.
              </p>
              <button className="font-bold pt-2">Find More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
