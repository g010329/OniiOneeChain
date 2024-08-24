"use client";

interface StepperProps {
  childrens: React.ReactNode[];
  currentStep: number;
}

function Stepper({ childrens, currentStep }: StepperProps) {
  return (
    <div
      className="w-full transition-transform duration-300 ease-in-out flex"
      style={{ transform: `translateX(-${currentStep * 100}%)` }}
    >
      {childrens.map((step, idx) => (
        <div
          key={idx}
          className="w-full flex-shrink-0 flex items-center justify-center"
        >
          {idx === 1 && (
            <div className="w-[300px] space-y-10">
              <img
                src={"/img_3.png"}
                alt="img"
                className="w-[80px] ml-[60px]"
              />
              <img
                src={"/img_1.png"}
                alt="img"
                className="w-[60px] ml-[-40px]"
              />
              <img
                src={"/img_2.png"}
                alt="img"
                className="w-[80px] ml-[100px]"
              />
              <img src={"/img_1.png"} alt="img" className="w-[60px] ml-0" />
              <img
                src={"/img_3.png"}
                alt="img"
                className="w-[50px] ml-[180px]"
              />
              <img src={"/img_2.png"} alt="img" className="w-[60px] ml-0" />
            </div>
          )}
          {step}
          {idx === 1 && (
            <div className="w-[300px] space-y-10">
              <img
                src={"/img_1.png"}
                alt="img"
                className="w-[40px] ml-[100px]"
              />
              <img
                src={"/img_3.png"}
                alt="img"
                className="w-[80px] ml-[260px]"
              />
              <img
                src={"/img_1.png"}
                alt="img"
                className="w-[60px] ml-[180px]"
              />
              <img
                src={"/img_2.png"}
                alt="img"
                className="w-[80px] ml-[80px]"
              />
              <img
                src={"/img_1.png"}
                alt="img"
                className="w-[40px] ml-[290px]"
              />
              <img
                src={"/img_3.png"}
                alt="img"
                className="w-[80px] ml-[160px]"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export { Stepper };
