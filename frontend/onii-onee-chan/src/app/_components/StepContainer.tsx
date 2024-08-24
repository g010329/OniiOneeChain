"use client";

function StepContainer({
  childrens,
  currentStep,
}: {
  childrens: React.ReactNode[];
  currentStep: number;
}) {
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
          {step}
        </div>
      ))}
    </div>
  );
}

export { StepContainer };
