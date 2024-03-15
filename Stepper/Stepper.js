import React from "react";

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = [];

  list.map((_, i) => {
    return steps.push(
      <div
        class= {currentStep >=i ? "w-10 h-10 p-2 rounded-full bg-blue-200 z-10 flex item-center justify-center cursor-pointer":"w-10 h-10 p-2 rounded-full bg-gray-200 z-10 flex item-center justify-center  cursor-pointer"}
        key={i}
      >
        {i + 1}
      </div>
    );
  });

  const progressWidth= (100 /(list.length-1))*currentStep

  const onPrev=()=>{
    if(currentStep!==0){
        setCurrentStep(currentStep-1)
    }
  }

  const onNext=()=>{
    if(currentStep < list.length-1){
        setCurrentStep(currentStep+1)
    }
  }

  return (
    <>
      <div class="relative">
        <div class="flex item-center justify-between transition-all">
          {steps}
        </div>
        <div class="absolute h-2 bg-blue-200 z-0 top-1/2 left-0 transition-all" style={{width:`${progressWidth}%`}}></div>  
      </div>
      {/* As we are unable to add onPrev and onNext functionality on every step so we are using react.cloneElement
      which will clone every single component and give onPrev and OnNext to them */}
      <div>{React.cloneElement(list[currentStep],{onPrev, onNext})}</div>
    </>
  );
};

export default Stepper;
