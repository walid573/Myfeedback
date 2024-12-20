import { Button } from "@nextui-org/react";
import React from "react";

function Feedback() {
  return (
    <section className="bg-[#F2F2F2] py-12">
      <div className="container mx-auto flex flex-row items-center justify-center ">
        {/* left section */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold w-[65%]">
            MyFeedback for Business has resources to help you plan, start, grow,
            and advertise your small business
          </h1>
          <p className="text-[#5E5E5E] text-xl w-[60%] py-8">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
          <Button color="primary" radius="full" size="2xl" className="bg-black px-4 py-2">Explore MyFeedback business</Button>
        </div>
        {/* right section */}
        <div>
            <img src="./photo.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Feedback;
