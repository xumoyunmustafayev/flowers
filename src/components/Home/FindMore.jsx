import { Data } from "../../data.js/data";

const PlantCard = ({ img, title, description }) => (
  <div className="flex w-full  shadow-xl relative mx-4  bg-[#efefef] rounded-lg">
    <div className="relative w-[40%] rounded-lg">
      <img
        src={img}
        alt="plant img"
        className="h-full w-full object-cover bg-transparent "
      />
    </div>
    <div className="w-1/2 p-6 flex flex-col justify-center">
      <h1 className="text-end text-xl font-medium mb-2">{title}</h1>
      <p className="text-end mb-4">{description}</p>
      <p className="text-end mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque
      </p>
      <div className="flex justify-end">
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-2">
          Find More →
        </button>
      </div>
    </div>
  </div>
);

const FindMore = () => {
  return (
    <div className="flex flex-wrap justify-between mt-32">
      {Data.slice(18, 21).map((item, index) => (
        <div key={index} className="w-full md:w-[48%] mb-4 rounded-lg">
          <PlantCard
            img={item.image_url}
            title={item.common_name}
            description={item.bibliography}
          />
        </div>
      ))}
    </div>
  );
};

export default FindMore;
