import { useState, useEffect } from "react";
import MeditationForm from "../components/MeditationForm";
import MeditationCircles from "../components/MeditationCircles";
import { AudioPlayer } from "../components/meditation";

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
      <div className="w-full text-center relative bottom-48">
        <h1 className="text-3xl font-bold">Meditation</h1>
      </div>
      <div className="mb-3 w-full relative left-16 h-auto flex flex-row justify-center items-center ">
        <MeditationCircles breath={breath} />
      </div>

      <div className="w-full h-auto flex justify-evenly items-center">
        <MeditationForm onSelect={handleBreathValue} />
        <AudioPlayer />
      </div>
    </div>
  );
}
