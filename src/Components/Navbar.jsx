import React from "react";
import { Button } from "@nextui-org/react";
function MyNavbar() {
  return (
    <section className="w-full bg-[#FFFFFF] mb-6">
      <div className="flex flex-row items-center justify-between container mt-6  mx-auto">
        {/* logo */}
        <div>
          <img src="./logo.svg" alt="" />
        </div>
        {/* search bar */}
        <div className="w-0 md:w-[30%] overflow-hidden">
          <div className="border border-gray-400 px-8 py-2 rounded-full flex items-center  gap-3">
            <select
              className="border-0"
              name="features"
              id="features"
              placeholder="features"
            >
              <option value="">restaurant, hotel, service....</option>
              <option value="Restaurants">Restaurants</option>
              <option value="Hotels">Hotels</option>
              <option value="Home services">Home services</option>
              <option value="Car location">Car location</option>
            </select>
            <select name="country" id="country">
              <option value="">Singapour...</option>
              <option value="">Indonasia</option>
              <option value="">Tailand</option>
              <option value="">South Korea</option>
            </select>
            <button className="bg-[#1677BD] p-3 rounded-full">
              <img src="./search.png" alt="" />
            </button>
          </div>
        </div>
        {/* user profile */}
        <div className="flex items-center justify-center gap-3">
          <img src="wiki.svg" className="w-10 md:w-8" alt="" />
          <div className="w-0 md:w-[30%]">
          <Button color="" className="bg-black text-white rounded-full md:px-6 md:py-6  overflow-hidden ">MyFeedback for business</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyNavbar;
