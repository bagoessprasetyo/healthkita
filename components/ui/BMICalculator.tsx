"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";

export default function BMICalculator() {
  const [gender, setGender] = useState("man");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(0);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBMI(parseFloat(calculatedBMI.toFixed(1)));
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0">
        <div className="bg-secondarysurface rounded-lg shadow-lg w-full lg:w-[695px] p-6 md:p-8">
          <div className="mb-6">
            <p className="font-medium text-base text-primary">Malaysia Medical</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">BMI Calculator</h2>
            <p className="text-sm text-gray-600 mt-2 font-normal">
              Achieving your ideal weight means more than just looking good—its about staying healthy too. Ready to see where you stand? Try the BMI Calculator now.
            </p>
          </div>

          <Card className="w-full bg-transparent border-none">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full">
                <div className="flex flex-col w-full md:w-1/2 rounded-2xl space-y-5 bg-primary p-6">
                  <h3 className="text-lg text-white font-normal">Are you?</h3>
                  <div className="grid grid-cols-2 gap-x-3">
                    <div onClick={() => setGender("man")} className="flex items-center flex-col cursor-pointer group space-y-2">
                      <div className={`rounded-full p-3 ${gender === "man" ? "bg-secondarysurface" : "bg-primarysurface"} group-hover:bg-secondary`}>
                        <Icon icon="noto:man" className="size-10" />
                      </div>
                      <p className="text-white font-light">Man</p>
                    </div>
                    <div onClick={() => setGender("woman")} className="flex items-center flex-col cursor-pointer group space-y-2">
                      <div className={`rounded-full p-3 ${gender === "woman" ? "bg-secondarysurface" : "bg-primarysurface"} group-hover:bg-secondary`}>
                        <Icon icon="noto:woman" className="size-10" />
                      </div>
                      <p className="text-white font-light">Woman</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 rounded-2xl space-y-5 bg-primary p-5">
                  <h3 className="text-lg text-white font-normal">Height & Weight</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="number"
                      placeholder="Your height (cm)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="bg-white"
                    />
                    <Input
                      type="number"
                      placeholder="Your weight (kg)"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  <Button onClick={calculateBMI} className="w-full bg-secondary hover:bg-amber-800 text-white">
                    Calculate BMI
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="w-full lg:w-1/3 bg-white border-2 border-primary shadow-md">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">Your Result Here!</h2>
            {bmi ? (
              <>
                <p className="mb-2">BMI for {gender === "man" ? "Man" : "Woman"}</p>
                <p className="mb-2">Height: {height} cm &nbsp;&nbsp; Weight: {weight} kg</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: `${Math.min(bmi * 3, 100)}%` }}
                  ></div>
                </div>
                <p className="text-3xl font-bold text-red-500 mb-4">{bmi}</p>
                <p className="text-lg mb-2">
                  Your BMI {bmi}, {bmi < 18.5 ? "Underweight" : bmi < 25 ? "Ideal Weight" : bmi < 30 ? "Overweight" : "Obese"}
                </p>
                <p className="text-sm text-gray-600">
                  Its good. Always make sure your calorie intake matches your daily needs!
                </p>
              </>
            ) : (
              <p className="text-gray-500">Enter your details and calculate to see your BMI result.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}