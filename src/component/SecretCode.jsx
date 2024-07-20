import React, { useRef, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { loaderSelector } from "../selector/globalSelector";
import { closeBottomSheet } from "../App/features/gameSlice";

function SecretCode() {
  const loading = useSelector(loaderSelector);
  const dispatch = useDispatch();
  const [code, setCode] = useState(["", "", "", ""]);
  const [isCodeCracked, setIsCodeCracked] = useState(false);

  const inputRefs = useRef([]);

  const closeSheet = () => {
    dispatch(closeBottomSheet());
  };

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const crackCode = () => {
    const enteredCode = code.join("");
    if (enteredCode.length === 4) {
      // Logic to crack the code and earn 1 million coins
      // console.log("Code entered:", enteredCode);
      setIsCodeCracked(true);
    } else {
      // console.log("Please enter a 4-digit code.");
    }
  };

  return (
    <div className="w-full h-full max-h-minus-60 flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full flex justify-end">
        <button onClick={closeSheet}>
          <IoCloseCircle className="bg-black rounded-full text-white text-3xl hover:text-red-500" />
        </button>
      </div>
      <div className="w-full h-full overflow-auto my-2">
        <div className="w-full grid gap-4">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              className="bg-black mt-4 h-36"
              src="secret.jpeg"
              alt="Secret Code"
            />
            <div className="font-bold text-lg inline-block text-neon-blue max-w-[80%] text-center my-2">
              Crack Code And Earn 1,000,000 Coins
            </div>
          </div>

          <div className="w-full flex justify-center my-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center border border-neon-blue bg-transparent text-2xl text-neon-blue mx-2 neon-box"
                maxLength="1"
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={crackCode}
              className="bg-neon-blue text-white w-full font-bold py-2 px-4 rounded-md hover:bg-neon-blue-light"
            >
              {isCodeCracked ? "Cracked" : "Crack the Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecretCode;
