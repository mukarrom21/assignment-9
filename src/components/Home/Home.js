import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-2 my-10 w-full md:w-3/4 mx-auto'>
            <section className='max-h-[500px] bg-slate-300'>
                <h1 className='text-6xl font-extrabold text-center'>Your nexr leptop</h1>
                <h1 className='text-6xl font-extrabold text-blue-700 text-center'>Your best leptop</h1>
                <p className='my-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus cupiditate deserunt dignissimos doloremque facilis libero. Facere similique doloremque deserunt exercitationem. Quos ipsa tenetur commodi!</p>
                <button className='bg-gray-200 py-3 px-6 font-semibold text-blue-900 rounded mt-4 block mx-auto hover:bg-blue-500 hover:text-white'>Live demo</button>
            </section>
            <section className='max-h-[500px]'>
                <img className='w-full h-full' src="https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?t=st=1649062793~exp=1649063393~hmac=f8c9a46bfc864b2dd331e419ea52d042f7f050e6f382e9e2d0362e2a874167ae&w=996" alt="" />
            </section>
        </div>
    );
};

export default Home;