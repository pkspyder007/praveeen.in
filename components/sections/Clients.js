import React from "react";

function Clients() {
  return (
    <section className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24 lg:py-48">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-6 underline text-4xl lg:text-6xl font-semibold text-black-800 title-font">
            My Clients
          </h1>
        </div>
        {/* <div className="grid grid-cols-3 items-center justify-center gap-10 my-6 text-center lg:grid-cols-3"> */}
        <div className="flex flex-wrap items-center justify-around">
          <img className="h-8 mb-8" src="/img/xoolooloo.png" alt="IIIT UNA" />
          <img
            className="max-h-30 mb-8"
            src="/img/iiit-una.png"
            alt="IIIT UNA"
          />
          <p className="h-9 font-bold text-4xl mb-8">GitBlack</p>
        </div>
      </div>
    </section>
  );
}

export default Clients;
