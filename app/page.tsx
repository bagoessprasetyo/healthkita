"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between py-16 max-w-8xl">
        <h1 className="text-7xl">Your Passport to <br></br>Premium Healthcare</h1>
        <div className="flex flex-col space-y-6 items-end justify-end">
          <h6 className="font-medium text-lg text-secondary">Uniting Wellness, Education, and Consultations</h6>
          <Button className="w-1/2 py-6 bg-white text-secondary text-lg hover:text-white hover:bg-secondary">Booking Online</Button>
        </div>
      </div>
      <div className="min-w-full max-w-8xl">
        <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="min-w-full h-auto max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="rounded-tl-3xl rounded-tr-3xl">
                <div className="p-1 w-full">
                  <Card className="w-full rounded-tl-3xl rounded-tr-3xl">
                    <CardContent className="w-full flex rounded-tl-3xl rounded-tr-3xl items-center justify-center p-6">
                      <Image className="" src={'/hero.jpeg'} width={1320} height={660} alt="Healthkita Hero Banner" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="px-24 py-28 bg-white grid grid-cols-2 justify-between">
          <div className="flex flex-col space-y-4">
            <p className="font-medium text-base text-primary">Medical Tourism</p>
            <h2 className="font-semibold text-6xl">MGC <br></br> Medical <br></br> Tourism</h2>
            <div className="flex flex-col space-y-3">
              <p className="font-light text-base">Medical tourism enables access to high-quality, <br></br> affordable care in Malaysia and abroad.</p>
              <p className="font-light text-base">MGC targets International customers, marketing to <br></br>those seeking better healthcare options outside their home country.</p>
            </div>
          </div>
          <div className="flex flex-col space-y-6 w-full">
            <Image src={'/medcheck.png'} width={552} height={198} className="cursor-pointer" alt="Medical Check Up"/>
            <div className="flex flex-row space-x-6 items-center">
              <Image src={'/aesthetics.png'} width={264} height={198} className="cursor-pointer" alt="Aesthetics"/>
              <Image src={'/vitro.png'} width={264} height={198} className="cursor-pointer" alt="In Vitro Fertilization"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 bg-white py-[120px] px-9 items-center justify-center">
            <h3 className="font-semibold text-4xl">Local Partners – Medical Tourism</h3>
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-x-[80px] px-9">
              <Image src={'/partner-1.png'} width={151} height={60} alt="Alpha IVP"/>
              <Image src={'/partner-2.png'} width={151} height={60} alt="Alpha IVP"/>
              <Image src={'/partner-3.png'} width={151} height={60} alt="Alpha IVP"/>
              <Image src={'/partner-4.png'} width={151} height={60} alt="Alpha IVP"/>
              <Image src={'/partner-5.png'} width={151} height={60} alt="Alpha IVP"/>
              <Image src={'/partner-6.png'} width={151} height={60} alt="Alpha IVP"/>
            </div>
        </div>
      </div>
    </>
  );
}
