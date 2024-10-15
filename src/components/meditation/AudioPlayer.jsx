import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const audio = new Audio(import.meta.env.BASE_URL + "audio/beach.mp3");
audio.loop = true;
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
        className="relative h-12 w-12 text-neutral-900 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/50  hover:text-teal-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-sm border border-gray-200 dark:bg-neutral-900 dark:border-white/5 dark:text-neutral-300 rounded-2xl transition duration-100 ease-in-out"
      >
        <div className="relative w-full h-full">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform
            ${isPlaying ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
          >
            <Play className="w-6 h-6 " />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform
            ${isPlaying ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
          >
            <Pause className="w-6 h-6 " />
          </div>
        </div>
      </button>{" "}
    </div>
  );
}
