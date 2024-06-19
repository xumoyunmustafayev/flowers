import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Data } from "../data.js/data";
import { IoCloseSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { AboutContext, ProductContext } from "../App";
import { ToggleModal } from "../redux/PaginationSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(Data.slice(0, 10));
  const [clickedItems, setClickedItems] = useState([]);
  const dispatch = useDispatch();
  const { product, setProduct } = useContext(ProductContext);
  const { setAbout } = useContext(AboutContext);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query);
  };

  const filterData = (query) => {
    const filtered = Data.filter((item) =>
      item.common_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered.slice(0, 20));
  };

  const closeModal = () => {
    dispatch(ToggleModal());
  };

  const handleBasketClick = (itemId) => {
    if (!product.includes(itemId)) {
      setProduct([...product, itemId]);
      setClickedItems([...clickedItems, itemId]);
    }
  };

  const handleItemClick = (itemId) => {
    setAbout([itemId]);
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-40">
      <div className="w-[700px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-end p-2">
          <IoCloseSharp
            className="w-8 h-8 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <input
          type="text"
          className="w-full p-4 border-b border-gray-200 focus:outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className="overflow-y-auto h-[500px]">
          {filteredData.map((item) => (
            <Link
              to="/shop"
              key={item.id}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center p-4">
                  <img
                    src={item.image_url}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <p className="ml-4 text-gray-800">{item.common_name}</p>
                </div>
                <div className="px-5">
                  <SlBasket
                    className={`w-6 h-6 cursor-pointer ${
                      clickedItems.includes(item.id) ? "text-green-500" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleBasketClick(item.id);
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
