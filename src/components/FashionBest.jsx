function FashionBest() {
  const style = {
    zoom: {
      transition: "transform 0.3s ease", /* Smooth transition */
    },
    "zoom:hover": {
      transform: "scale(1.1)", /* Scale the image to 110% on hover */
    }
  };
  const data = [
    {
      Name: "projector",
      Prize: "from 6990",
      Img: "https://m.media-amazon.com/images/I/718Msrt2xkL.jpg"
    },
    {
      Name: "Monitor",
      Prize: "from 6599",
      Img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683210147/Croma%20Assets/Computers%20Peripherals/Monitor/Images/224655_0_jv66z0.png"
    },
    {
      Name: "Keyboard",
      Prize: "from 4999",
      Img: "https://media.croma.com/image/upload/v1681404931/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/257348_0_lpyooa.png"
    },
    {
      Name: "projector",
      Prize: "from 6990",
      Img: "https://m.media-amazon.com/images/I/718Msrt2xkL.jpg"
    },
    {
      Name: "Monitor",
      Prize: "from 6599",
      Img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683210147/Croma%20Assets/Computers%20Peripherals/Monitor/Images/224655_0_jv66z0.png"
    },
    {
      Name: "Keyboard",
      Prize: "from 4999",
      Img: "https://media.croma.com/image/upload/v1681404931/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/257348_0_lpyooa.png"
    }
  ]

  return (
    <>
    <div className="bg-white m-3 h-[48vh]">
      <h1 className="color-black text-[3vh] m-5 p-3 font-bold">Best of electronics </h1>
      <div className="grid grid-cols-6 gap-5 m-4 mt-[-5px]">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-5 border-2">
          <img src={item.Img} alt={item.Name} className="w-full h- zoom" />
            <h2 className="text-lg font-bold">{item.Name}</h2>
            <p className="text-sm text-gray-600">{item.Prize}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default FashionBest;