"use client";

type Props = {
  message: string;
};

const SuccessPopup = ({ message }: Props) => {
  return (
    <div className="text-green-500 font-semibold mb-4 text-center animate-fade-in">
      ✅ {message}
    </div>
  );
};

export default SuccessPopup;
