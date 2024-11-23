import Image from "next/image";
function Home() {
  return (
    <div className="flex justify-around px-20 bg-[#1F1F1F]">
<div className=" ml-20 py-10  mt-12 w-[50%]">
      <div className="mb-2">
        <h2 className="font-bold text-md  font-poppins text-[#F8F7F9] ">HI,{`I'M`} SAUL</h2>
      </div>

      <div className="mb-4">
        <h1 className="font-bold font-poppins text-7xl text-[#F8F7F9] ">{`I'M`} A WEB DESIGNER</h1>
      </div>

      <div className="mb-6">
        <p className="text-gray-400 inline-block w-96">
        A Frontend Developer creates seamless, visually appealing, and responsive user interfaces, ensuring exceptional user experiences with modern web technologies.
        </p>
      </div>

      <div className="">
        <button className=" bg-gray-[850] text-[#F8F7F9] font-bold text-sm border border-white py-2 px-4 rounded-lg">
          VIEW MY PROJECTS
        </button>
      </div>

      </div>


      <div className="mt-24 mr-16 w-[50%]">
        <Image
        src="/u.png"
        alt="man-image"
        width={400} 
        height={300} 
        className=" bg-[#0E0101] w-[450px] h-[390px]"
        />
      </div>

    </div>
  );
}
export default Home;

