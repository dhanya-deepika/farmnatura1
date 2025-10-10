import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  title: string;
  name: string;
  designation: string;
  content: string;
}

const TestimonialItem: React.FC<Props> = ({
  img,
  title,
  name,
  designation,
  content,
}) => {
  return (
    <div className="relative">
      <div className="w-full bg-primary-green-dark py-[45px] pr-[20px] xl:pr-[60px] 2xl:pr-[100px] mt-[200px] 2xl:mt-[400px] relative">
        <p className="font-jost text-[16px] 2xl:text-[20px] text-white max-w-[60%] ml-auto">
          {content}
        </p>
        <Image
          src={img}
          width={200}
          height={200}
          alt="img"
          className="w-[300px] h-[350px] 2xl:w-[500px] 2xl:h-[550px] object-cover absolute bottom-0 left-10"
        />
        <Image
          src="/svg/testimonial-leaf.svg"
          width={200}
          height={200}
          alt="leaf"
          className="w-[200px] h-[330px] object-contain absolute -top-[120%] right-[20%] xl:-top-[150%] xl:right-[30%]"
        />
        <div className="absolute -top-[50%] 2xl:-top-[90%] left-[40%] xl:left-[30%] 2xl:left-[35%]">
          <p className="font-jost font-normal text-[20px] xl:text-[26px] 2xl:text-[36px]">
            {title}
          </p>
          <p className="font-jost font-normal text-[16px] 2xl:text-[20px] mt-3">
            {name}
          </p>
          <p className="font-jost font-normal text-[16px] 2xl:text-[20px]">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
