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

  const handleHeightChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setHeight(value);
  };

  const handleHeightBlur = () => {
    if (height && !height.includes("cm")) {
      setHeight(`${height} cm`);
    }
  };

  const handleHeightFocus = () => {
    if (height.includes("cm")) {
      setHeight(height.replace(" cm", ""));
    }
  };

  const handleWeightChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setWeight(value);
  };

  const handleWeightBlur = () => {
    if (weight && !weight.includes("kg")) {
      setWeight(`${weight} kg`);
    }
  };

  const handleWeightFocus = () => {
    if (weight.includes("kg")) {
      setWeight(weight.replace(" kg", ""));
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-lg text-white font-normal mb-3">Height</h3>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Your height (cm)"
                          value={height}
                          onChange={handleHeightChange}
                          onBlur={handleHeightBlur}
                          onFocus={handleHeightFocus}
                          className="bg-white pr-10"
                        />
                        <div className="absolute right-0 top-0 bottom-0 flex flex-col">
                          <Button onClick={() => setHeight((prev) => {
                            const num = parseInt(prev);
                            return isNaN(num) ? prev : `${num + 1} cm`;
                          })} className="h-1/2 px-2 bg-secondary text-white rounded-none rounded-tr">
                            <Icon icon="mdi:chevron-up" className="w-4 h-4" />
                          </Button>
                          <Button onClick={() => setHeight((prev) => {
                            const num = parseInt(prev);
                            return isNaN(num) ? prev : `${num - 1} cm`;
                          })} className="h-1/2 px-2 bg-secondary text-white rounded-none rounded-br">
                            <Icon icon="mdi:chevron-down" className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg text-white font-normal mb-3">Weight</h3>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Your weight (kg)"
                          value={weight}
                          onChange={handleWeightChange}
                          onBlur={handleWeightBlur}
                          onFocus={handleWeightFocus}
                          className="bg-white pr-10"
                        />
                        <div className="absolute right-0 top-0 bottom-0 flex flex-col">
                          <Button onClick={() => setWeight((prev) => {
                            const num = parseInt(prev);
                            return isNaN(num) ? prev : `${num + 1} kg`;
                          })} className="h-1/2 px-2 bg-secondary text-white rounded-none rounded-tr">
                            <Icon icon="mdi:chevron-up" className="w-4 h-4" />
                          </Button>
                          <Button onClick={() => setWeight((prev) => {
                            const num = parseInt(prev);
                            return isNaN(num) ? prev : `${num - 1} kg`;
                          })} className="h-1/2 px-2 bg-secondary text-white rounded-none rounded-br">
                            <Icon icon="mdi:chevron-down" className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
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
            <h2 className="text-xl font-bold mb-4">
              {bmi ? "Your Result Is Here!" : "See Your Results Now!"}
            </h2>
            {bmi ? (
              <>
                <p className="mb-2">BMI for {gender === "man" ? "Man" : "Woman"}</p>
                <p className="mb-2">Height: {height} &nbsp;&nbsp; Weight: {weight}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className={`h-2.5 rounded-full ${bmi >= 18.5 && bmi < 25 ? "bg-green-500" : "bg-red-500"}`}
                    style={{ width: `${Math.min(bmi * 3, 100)}%` }}
                  ></div>
                </div>
                <p className={`text-3xl font-bold mb-4 ${bmi >= 18.5 && bmi < 25 ? "text-green-500" : "text-red-500"}`}>{bmi}</p>
                <p className="text-lg mb-2">
                  Your BMI {bmi}, {bmi < 18.5 ? "Underweight" : bmi < 25 ? "Ideal Weight" : bmi < 30 ? "Overweight" : "Obese"}
                </p>
                <p className="text-sm text-gray-600">
                  {bmi < 18.5 ? "Consider consulting a healthcare provider to discuss ways to achieve a healthier weight." :
                  bmi >= 30 ? "It's important to consult with a healthcare provider for personalized advice on achieving a healthier weight." :
                  bmi >= 25 ? "Consider adopting a balanced diet and regular exercise to reach a healthier weight." :
                  "It's good. Always make sure your calorie intake matches your daily needs!"}
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