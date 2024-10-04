const OurServices = () => {
  return (
    <div>
      <section className=" m-10 rounded-xl bg-gray-50 shadow-sm grid grid-cols-3 gap-8">
        <h className="col-span-3 mb-20 mx-auto mt-6 text-xl">Our Services</h>
        <p className="m-10 w-full col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum non
          deleniti reiciendis veniam maxime, facere debitis? Earum voluptates
          dolor dicta doloribus aliquam quidem perspiciatis velit, eligendi et
          esse deleniti!
        </p>
        <img
          className="p-10"
          src="/image.jpg"
          alt="Me and Raic image"
        ></img>
        <div className="grid grid-cols-3"></div>
      </section>

      <div className="grid grid-cols-3 gap-10 m-20 p-10 ">
        <div className=" bg-white shadow-lg rounded-xl p-10">
          <img className="p-4 rounded-full" src="/image2.jpg" alt="Us chatting" />
          <h1 className=" relative left-3 pb-10 text-xl font-bold">We Chat</h1>
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste et autem fugiat.</p>
        </div>
        <div className=" bg-white shadow-lg rounded-xl p-10">
          <img className="p-4 rounded-full" src="/image2.jpg" alt="Us chatting" />
          <h1 className=" relative left-3 pb-10 text-xl font-bold">We Chat</h1>
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste et autem fugiat.</p>
        </div>
        <div className=" bg-white shadow-lg rounded-xl p-10">
          <img className="p-4 rounded-full" src="/image2.jpg" alt="Us chatting" />
          <h1 className=" relative left-3 pb-10 text-xl font-bold">We Chat</h1>
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste et autem fugiat.</p>
        </div>
      </div>


      <div className="flex justify-center items-center mt-10 mb-32">
  
  <div className="relative left-10 transform -translate-x-4 -rotate-3 z-10 bg-white p-6 rounded-lg shadow-lg w-64 h-80">
    <h2 className="text-xl font-bold">Left Card</h2>
    <p className="mt-4">This is the left card, slightly rotated and behind the middle one.</p>
    <img className="p-4 rounded-full" src="/image2.jpg" alt="Us chatting" />
  </div>

  
  <div className="relative z-20 transform scale-110 bg-white p-6 rounded-lg shadow-2xl w-64 h-80 mx-4">
    <h2 className="text-xl font-bold">Middle Card</h2>
    <p className="mt-4">This is the middle card, which appears in front of the others.</p>
    <img className="p-4 rounded-full" src="/image2.jpg" alt="Us chatting" />
  </div>

  
  <div className=" relative right-10 transform translate-x-4 rotate-3 z-10 bg-white p-6 rounded-lg shadow-lg w-64 h-80">
    <h2 className="text-xl font-bold">Right Card</h2>
    <p className="mt-4">This is the right card, slightly rotated and behind the middle one.</p>
    <img className="p-4 rounded-full" src="/image2.jpg" alt="Us chatting" />
  </div>
</div>


    </div>
  );
};

export default OurServices;
