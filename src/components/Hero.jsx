import { useEffect } from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr";

const Hero = () => {
  useEffect(() => {
    // Initialize Plyr on the iframe with the correct id
    const player = new Plyr("#player", {
      settings: ["quality", "speed", "loop", "muted", "captions", "pip", "fullscreen"],
      captions: { active: true, language: "en" },
      autoplay: true, // Autoplay the video
      loop: { active: true }, // Enable looping
      controls: [
        "play-large", // Play large button
        "play", // Play/pause button
        "rewind", // Rewind button
        "fast-forward", // Fast forward button
        "progress", // Progress bar
        "current-time", // Current time display
        "duration", // Duration display
        "mute", // Mute button
        "volume", // Volume control
        "captions", // Captions button
        "settings", // Settings menu
        "pip", // Picture in Picture button
        "fullscreen", // Fullscreen button
      ],
    });

    // Example event listener for when the video starts playing
    player.on("play", () => {
      console.log("Video is now playing");
    });

    // Example event listener for when the video ends
    player.on("ended", () => {
      console.log("Video has ended");
    });

    return () => {
      player.destroy(); // Cleanup the player when the component unmounts
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      {/* Wrapper for iframe to ensure responsiveness */}
      <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
        <iframe
          id="player"
          src="https://www.youtube.com/embed/zQGQLEE1nQs?controls=1&enablejsapi=1&modestbranding=1&autohide=1"
          title="Darkside「AMV」Anime Mix"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
