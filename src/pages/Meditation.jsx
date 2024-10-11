import { useState, useEffect } from "react";
import MeditationForm from "../components/MeditationForm";

const initCircle = 110;

export default function Meditation() {
  const [size, setSize] = useState(initCircle);
  const [breath, setBreath] = useState(5);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) {
      setSize(300);
      setExpanded(true);
    } else {
      const intervalId = setInterval(() => {
        setSize((prevSize) => (prevSize === initCircle ? 300 : initCircle));
      }, breath * 1000);

      return () => clearInterval(intervalId);
    }
  }, [breath, expanded]);

  function handleBreathValue(value) {
    setBreath(value);
    setSize(initCircle);
  }

  return (
    <div>
      <div className="w-full text-center relative bottom-60">
      <h1 className="text-3xl font-bold">Meditation</h1>
      </div>
      <div className="mb-3 w-full h-80 flex flex-row justify-center items-center ">
        <div
          className=" flex flex-col justify-center items-center mb-5  "
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            backgroundColor: "#53BDFF",
            transition: `width ${breath}s, height ${breath}s`,
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <h1 className=" mb-4 text-2xl font-medium mt-4">
            {size == 300 ? "Inhale" : "Exhale"}
          </h1>
        </div>
      </div>

      <div className="w-full h-auto flex-row flex justify-center">
        <MeditationForm onSelect={handleBreathValue} />
      </div>
    </div>
  );
}
