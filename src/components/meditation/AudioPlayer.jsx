import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import beachAudio from "/audio/beach.mp3";
const audio = new Audio(beachAudio);
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="relative h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform
            ${isPlaying ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
          >
            <Play className="w-6 h-6 text-white" />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform
            ${isPlaying ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
          >
            <Pause className="w-6 h-6 text-white" />
          </div>
        </div>
      </button>{" "}
    </div>
  );
}
