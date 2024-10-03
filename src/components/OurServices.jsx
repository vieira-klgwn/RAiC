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
          src="./public/image.jpg"
          alt="Me and Raic image"
        ></img>
        <div className="grid grid-cols-3"></div>
      </section>

      <div className="grid grid-cols-3 gap-48 m-20 bg-white shadow-lg rounded-xl">
        <div>
          <img src="image2.jpg" alt="Us chatting" />
          <h1>We Chat</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <img src="image2.jpg" alt="Us chatting" />
          <h1>We Chat</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <img src="image2.jpg" alt="Us chatting" />
          <h1>We Chat</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
