import Image from "next/image";
import { Button } from "../ui/button";

const MoveIn = () => {
  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url(/svg/move-in-container.svg)] bg-no-repeat bg-left bg-cover"></div>

      {/* Content: left text, right image */}
      <div className="relative flex flex-col lg:flex-row items-start justify-between w-full h-[500px] px-4 lg:px-16">
        {/* Left side: text and button */}
        <div className="flex flex-col text-left max-w-lg">
          <p className="font-jost text-[20px] lg:text-[46px] text-white">
            Ready To Move In Are You?
          </p>
          <p className="font-jost text-[16px] lg:text-[22px] text-white mt-5">
            Check out the new farms for sale in Hyderabad by Farm Natura.
          </p>

          <Button className="bg-white mt-6 w-[240px]">
            <p className="font-poppins text-black font-medium">Get in Touch</p>
          </Button>
        </div>

        {/* Right side: image */}
        <div className="mt-6 lg:mt-0">
          <Image
            src="/home/move-in-ppl.png"
            width={600}
            height={450}
            alt="move-in"
            className="w-[600px] h-[450px] object-contain"
          />
        </div>
      </div>

      {/* Decorative images (absolute) */}
      <Image
        src="/home/move-in-left.png"
        width={800}
        height={800}
        alt="move-in-left"
        className="w-[800px] h-[800px] object-cover absolute left-0 top-0"
      />
      <Image
        src="/home/move-in-clouds.png"
        width={450}
        height={300}
        alt="move-in-clouds"
        className="w-[450px] h-[300px] object-cover absolute left-[30%] top-0"
      />
      <Image
        src="/home/move-in-right.png"
        width={700}
        height={700}
        alt="move-in-right"
        className="w-[700px] h-[700px] object-contain absolute -right-56 top-10"
      />
    </div>
  );
};

export default MoveIn;
