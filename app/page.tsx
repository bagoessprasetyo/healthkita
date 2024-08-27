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
import { Separator } from "@/components/ui/separator";
import BMICalculator from "@/components/ui/BMICalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PackageSection from "@/components/ui/package-card";


export default function Home() {
  const basicPrep = [
    '/prep-1.png',
    '/prep-2.png',
    '/prep-3.png',
    '/prep-4.png',
    '/prep-5.png',
    '/prep-6.png',
    '/prep-7.png',
    '/prep-8.png',
  ];

  const standardPkg = [
    '/standard-1.jpeg',
    '/standard-2.jpeg',
    '/standard-3.jpeg',
    '/standard-4.jpeg',
    '/standard-5.jpeg',
  ];

  const premiumPkg = [
    '/premium-1.jpeg',
    '/premium-2.jpeg',
    '/premium-3.jpeg',
    '/premium-4.jpeg',
    '/premium-5.jpeg',
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between py-8 md:py-16 px-4 md:px-8 max-w-8xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-0">Your Passport to <br className="hidden md:inline" />Premium Healthcare</h1>
        <div className="flex flex-col space-y-4 md:space-y-6 items-start md:items-end justify-end">
          <h6 className="font-medium text-base md:text-lg text-secondary">Uniting Wellness, Education, and Consultations</h6>
          <Button className="w-full md:w-1/2 py-4 md:py-6 bg-white text-secondary text-base md:text-lg hover:text-white hover:bg-secondary">Booking Online</Button>
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
                    <CardContent className="w-full flex rounded-tl-3xl rounded-tr-3xl items-center justify-center p-2 md:p-6">
                      <Image className="w-full h-auto" src={'/hero.jpeg'} width={1320} height={660} alt="Healthkita Hero Banner" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          <div className="flex flex-col space-y-4">
            <p className="font-medium text-base text-primary">Medical Tourism</p>
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-0">
                MGC <br className="hidden md:inline" /> Medical <br className="hidden md:inline" /> Tourism
              </h2>
              <Image
                src="/pattern-1.png"
                width={170}
                height={170}
                alt="Medical Tourism"
                className="hidden md:block md:ml-4"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-light text-base">
                Medical tourism enables access to high-quality, affordable care in Malaysia and abroad.
              </p>
              <p className="font-light text-base">
                MGC targets International customers, marketing to those seeking better healthcare options outside their home country.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6 w-full">
            <Image
              src="/medcheck.png"
              width={552}
              height={198}
              className="w-full h-auto cursor-pointer"
              alt="Medical Check Up"
            />
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center">
              <Image
                src="/aesthetics.png"
                width={264}
                height={198}
                className="w-full  h-auto cursor-pointer"
                alt="Aesthetics"
              />
              <Image
                src="/vitro.png"
                width={164}
                height={98}
                className="w-full cursor-pointer bg-cover"
                alt="In Vitro Fertilization"
              />
            </div>
          </div>
        </div>
        <PackageSection/>
        <div className="flex flex-col space-y-10 bg-white px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 items-start justify-start">
          <div className="flex flex-col space-y-3">
            <p className="font-medium text-base text-primary">Medical Tourism</p>
            <h2 className="font-semibold text-4xl lg:text-5xl mb-4 md:mb-0">
              Basic Preparation for Health Screening
            </h2>
          </div>
          <Carousel plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]} className="min-w-full h-auto max-w-xs">
            <CarouselContent>
              {basicPrep.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 rounded-tl-3xl rounded-tr-3xl">
                  <div className="p-1 w-full">
                    <Card className="w-full rounded-tl-3xl rounded-tr-3xl">
                      <CardContent className="p-0 w-full flex rounded-tl-3xl rounded-tr-3xl items-center justify-center">
                        <Image className="w-full h-auto" src={src} width={1320} height={660} alt={`Preparation Step ${index + 1}`} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex flex-col px-10 py-6 bg-primarysurface rounded-lg space-y-6">
            <h5 className="font-bold text-2xl">Blood Test</h5>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-base font-normal">Fasting is required at least 8 hours but not more than 10 hours before your appointment date.</li>
              <li className="text-base font-normal">The purpose of fasting allows blood sugars to stabilize for more accurate blood test results on the glucose, cholesterol and triglycerides.</li>
              <li className="text-base font-normal">During the fasting period, you are ONLY allowed to drink plain water.</li>
              <li className="text-base font-normal">Do not take any medications, for example: medicines for diabetics, hypertension, cholesterol, and supplements (especially the night before screening) & on the health screening day. You can prepare them and bring them along as you may take them after your blood drawn is done.</li>
              <li className="text-base font-normal">If you are not feeling well, please postpone your health screening to a later date as illness and medications (e.g., antibiotics) can affect your screening results. Kindly contact us if you need to postpone your health screening.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-10 bg-white px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 items-center justify-center">
          <BMICalculator/>
        </div>
        <div className="flex flex-col space-y-10 bg-primary px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 items-start justify-start">
          <div className="flex flex-col w-full space-y-3">
            <p className="font-medium text-base text-white">Medical Tourism</p>
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="font-semibold text-white text-4xl lg:text-5xl mb-4 md:mb-0">
                Find Us!
              </h2>
              <Image src={'/star.png'} width={106} height={106} alt="Find Us"/>
            </div>
            <Image src={'/map.png'} width={1128} height={435} alt="Find Us"/>
          </div>
        </div>
        <div className="flex flex-col space-y-10 bg-white py-12 md:py-20 lg:py-[120px] px-4 md:px-9 items-center justify-center">
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center">Local Partners – Medical Tourism</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-x-[80px] px-4 md:px-9">
              <Image src={'/partner-1.png'} width={151} height={60} alt="Alpha IVP" className="w-full h-auto"/>
              <Image src={'/partner-2.png'} width={151} height={60} alt="Alpha IVP" className="w-full h-auto"/>
              <Image src={'/partner-3.png'} width={151} height={60} alt="Alpha IVP" className="w-full h-auto"/>
              <Image src={'/partner-4.png'} width={151} height={60} alt="Alpha IVP" className="w-full h-auto"/>
              <Image src={'/partner-5.png'} width={151} height={60} alt="Alpha IVP" className="w-full h-auto"/>
              <Image src={'/partner-6.png'} width={151} height={60} alt="Alpha IVP" className="w-full h-auto"/>
            </div>
        </div>
        <div className="flex flex-col space-y-10 bg-white py-12 md:py-20 lg:py-[120px] px-4 md:px-12 lg:px-24 items-center justify-center">
            <Separator className="border border-primary mt-0 pt-0"/>
            <div className="flex flex-col md:flex-row w-full justify-between items-start py-8 md:py-20 space-y-8 md:space-y-0">
              <Image src={'/healthkita.png'} width={190} height={120} alt="Healthkita" className="w-48 md:w-auto h-auto"/>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 items-center">
                  <Image src={'/marker.png'} width={24} height={24} alt="Location"/>
                  <p className="text-sm md:text-base font-normal">JI. Agung Sedayu City Utara No.16, East Jakarta</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-between items-start md:items-center">
                  <div className="flex flex-row space-x-4 items-center">
                    <Image src={'/phone-2.png'} width={24} height={24} alt="Phone"/>
                    <p className="text-sm md:text-base font-normal">0821-7772-6868</p>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <Image src={'/mail.png'} width={24} height={24} alt="Email"/>
                    <p className="text-sm md:text-base font-normal">info@lubkita.com</p>
                  </div>
                </div>
                <div className="flex flex-row pt-4 md:pt-8 space-x-6 items-center">
                  <p className="text-sm md:text-base font-light">Social Media</p>
                  <div className="flex flex-row space-x-4 items-center">
                    <Image src={'/fb.png'} width={24} height={24} alt="Facebook"/>
                    <Image src={'/tiktok.png'} width={24} height={24} alt="Tiktok"/>
                    <Image src={'/twitter.png'} width={24} height={24} alt="Twitter"/>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="border-1"/>
            <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5">
                <p className="text-sm md:text-base font-light">About Us</p>
                <p className="text-sm md:text-base font-light">Our Service</p>
                <p className="text-sm md:text-base font-light">Why Us</p>
                <p className="text-sm md:text-base font-light">FAQ</p>
              </div>
              <p className="text-sm md:text-base text-neutral-400 font-light text-center md:text-right">Copyright 2024 - Health Kita x MGC</p>
            </div>
        </div>
      </div>
    </>
  );
}