import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-[#F0F2F5]">
      <div className="bg-white py-2 fixed z-10 w-full">
        <Header />
      </div>
      <div className=" relative mt-[3.5rem] h-[calc(100%-3.5rem)]">
        <MainContainer />
      </div>
    </div>
  );
}

export default Home;
