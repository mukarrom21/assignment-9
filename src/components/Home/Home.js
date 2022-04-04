import React from "react";
import useLaptop from "../../hooks/useLaptop";
import Laptop from "../Laptop/Laptop";

const Home = () => {
    const [laptops, setLaptops] = useLaptop();
    let laptop3 = laptops.slice(0, 3);
  return (
    <main className="mb-5">
      <section className="grid grid-cols-2 my-10 w-full md:w-3/4 mx-auto">
        <div className="max-h-[500px] my-auto">
          <h1 className="text-6xl font-extrabold text-center">
            Your nexr leptop
          </h1>
          <h1 className="text-6xl font-extrabold text-blue-700 text-center">
            Your best leptop
          </h1>
          <p className="my-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            voluptatibus cupiditate deserunt dignissimos doloremque facilis
            libero. Facere similique doloremque deserunt exercitationem. Quos
            ipsa tenetur commodi!
          </p>
          <button className="bg-blue-200 py-3 px-6 md:py-5 md:px-10 font-semibold text-blue-900 rounded-md mt-4 block mx-auto hover:bg-blue-500 hover:text-white">
            Live demo
          </button>
        </div>
        <div className="max-h-[500px]">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?t=st=1649062793~exp=1649063393~hmac=f8c9a46bfc864b2dd331e419ea52d042f7f050e6f382e9e2d0362e2a874167ae&w=996"
            alt=""
          />
        </div>
      </section>

      <section>
          <h1 className="text-center text-4xl font-bold">Customer Reviews</h1>
          <div className="flex flex-wrap justify-center">
              {
                  laptop3.map(laptop=> <Laptop
                  key={laptop.id}
                  laptop={laptop}
                  ></Laptop>)
              }
          </div>
          <button className="block mx-auto bg-blue-600 text-white font-semibold px-12 rounded-md my-7">See All Reviews</button>
      </section>
    </main>
  );
};

export default Home;
