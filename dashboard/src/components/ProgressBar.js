const ProgressBar = () => {
  const steps = [
    "Preliminary", "Your Details", "KYC", "Parties",
    "Claim", "Review", "Payment"
  ];
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full ${
              index === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            } flex items-center justify-center`}
          >
            {index + 1}
          </div>
          <p className="text-xs mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
