import React from "react";

function Recent() {
  const Menu = [
    {
      id: 1,
      img1: "./m1.png",
      img2: "./m2.png",
      img3: "./m3.png",
      title: "Leslie sakho",
      country: "Canada, toronto",
      date: "09/11/2023",
      des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      id: 2,
      img1: "./m4.png",
      img2: "./m5.png",
      img3: "./m6.png",
      title: "Chris macari",
      country: "Singapour",
      date: "14/09/2023",
      des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
      id: 3,
      img1: "./m7.png",
      img2: "./m8.png",
      img3: "./m9.png",
      title: "Jojo alba",
      country: "Kuala lumpur",
      date: "28/09/2023",
      des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
    },
    {
        id: 4,
        img1: "./m4.png",
        img2: "./m5.png",
        img3: "./m6.png",
        title: "Chris macari",
        country: "Singapour",
        date: "14/09/2023",
        des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        des2:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
      },
  ];

  return (
    <section className="pb-24">
      <div className="w-full mx-auto">
        <h1 className="text-3xl px-10 py-4 font-bold">Recents avtivities</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-7  px-10 rounded-lg ">
          {Menu.map((item, i) => (
            <div key={i} className="bg-[#F8F8F8] rounded-xl mb-4 py-8 px-4 container mx-auto">
              <div className="flex flex-row items-start justify-start gap-3 ">
                <img className="bg-[#FFFFFF] p-3 rounded-full" src="./profile.png" alt="" />
                <div>
                  <h2 className="text-xl text-[#232323] font-semibold">{item.title}</h2>
                  <p className="text-[#8A8A8A] text-md">{item.country}</p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex flex-row gap-1 mb-2 items-center justify-start">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      className="w-4 h-4"
                      src="star.png"
                      alt="star"
                    />
                  ))}
                  <p>{item.date}</p>
                </div>
              </div>
             <p className="text-[#5E5E5E] pb-4 ">{item.des1}</p>
             <p className="text-[#5E5E5E] pb-4 ">{item.des2}</p>
             <div className="flex flex-row gap-4   ">
                
                <img className="" src={item.img1} alt="" />
                
                  
                  <img src={item.img2} alt="" />
                  <img src={item.img3} alt="" />
             </div>
             <h3 className="underline font-semibold text-xl pt-4">Discover</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recent;
