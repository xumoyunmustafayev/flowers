import { useState } from "react";
import Sign from "../components/Checkout/Sign";
import TrakModal from "../components/Checkout/TrakModal";

const Checkout = () => {
  const [heddin, setHeddin] = useState(false);
  return (
    <div className="mt-20">
      <Sign setHeddin={setHeddin} />
      {heddin && <TrakModal setHeddin={setHeddin} />}
    </div>
  );
};

export default Checkout;
