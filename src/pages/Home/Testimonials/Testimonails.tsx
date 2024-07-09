import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/Heading/Heading";
import { FaStar } from "react-icons/fa";

const Testimonails = () => {
  return (
    <div className="my-20">
      <Heading Heading="Castomer reviews"></Heading>
      <Carousel
        opts={{
          align: "start",
        }}
        // className="md:w-full max-w-sm"
      >
        <CarouselContent>
          {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          <CarouselItem className=" md:basis-1/2 lg:basis-1/2">
            <Card>
              {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent> */}
              <div className="bg-primary-gradient rounded-3xl h-[400px] flex items-center  relative">
                <div className=" absolute md:top-3 top-2   md:left-[40%] left-20 ">
                  <img
                    src="https://img.freepik.com/free-photo/man-with-crossed-arms_23-2147574164.jpg"
                    alt=""
                    className="w-32 h-32 rounded-[50%]  "
                  />
                </div>
                <div className="bg-white m-5 pt-20 pb-10 px-10 rounded-2xl">
                  <h1 className="text-center  ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat error dicta cumque ex rem nulla? Error rem quae
                    tempora illum!
                  </h1>
                  <div className="flex items-center justify-between ">
                    <div>
                      <h1 className="font-bold text-xl">Rahmina Khatun</h1>
                      <h1 className="">CEO , Company</h1>
                    </div>
                    <div className="flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/2">
            <Card>
              {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent> */}
              <div className="bg-primary-gradient rounded-3xl h-[400px] flex items-center  relative">
                <div className=" absolute md:top-3 top-2   md:left-[40%] left-20 ">
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-girl-city_1157-17242.jpg"
                    alt=""
                    className="w-32 h-32 rounded-[50%]  "
                  />
                </div>
                <div className="bg-white px-2 m-5 pt-20 pb-10 md:px-10 rounded-2xl">
                  <h1 className="text-center  ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat error dicta cumque ex rem nulla? Error rem quae
                    tempora illum!
                  </h1>
                  <div className="md:flex text-center items-center justify-between ">
                    <div>
                      <h1 className="font-bold text-xl">Rahmina Khatun</h1>
                      <h1 className="">CEO , Company</h1>
                    </div>
                    <div className="flex sm:justify-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/2">
            <Card>
              {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent> */}
              <div className="bg-primary-gradient rounded-3xl h-[400px] flex items-center  relative">
                <div className=" absolute md:top-3 top-2   md:left-[40%] left-20 ">
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-girl-city_1157-17242.jpg"
                    alt=""
                    className="w-32 h-32 rounded-[50%]  "
                  />
                </div>
                <div className="bg-white m-5 pt-20 pb-10 px-10 rounded-2xl">
                  <h1 className="text-center  ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat error dicta cumque ex rem nulla? Error rem quae
                    tempora illum!
                  </h1>
                  <div className="md:flex text-center items-center justify-between ">
                    <div>
                      <h1 className="font-bold text-xl">Rahmina Khatun</h1>
                      <h1 className="">CEO , Company</h1>
                    </div>
                    <div className="flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
          <CarouselItem className=" md:basis-1/2 lg:basis-1/2">
            <Card>
              {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent> */}
              <div className="bg-primary-gradient rounded-3xl h-[400px] flex items-center  relative">
                <div className=" absolute md:top-3 top-2   md:left-[40%] left-20 ">
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-girl-city_1157-17242.jpg"
                    alt=""
                    className="w-32 h-32 rounded-[50%]  "
                  />
                </div>
                <div className="bg-white m-5 pt-20 pb-10 px-10 rounded-2xl">
                  <h1 className="text-center  ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat error dicta cumque ex rem nulla? Error rem quae
                    tempora illum!
                  </h1>
                  <div className="md:flex text-center items-center justify-between ">
                    <div>
                      <h1 className="font-bold text-xl">Rahmina Khatun</h1>
                      <h1 className="">CEO , Company</h1>
                    </div>
                    <div className="flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
          {/* ))} */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonails;
