import { useRef } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

type AudioProps = {
  audio: string;
};
const WordAudio = ({ audio }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioEvent = () => {
    audioRef?.current?.play();
  };
  return (
    <div>
      <HiMiniSpeakerWave
        onClick={audioEvent}
        size="1.5rem"
        color="#fcf9f8"
        style={{ cursor: "pointer" }}
      />
      <audio ref={audioRef} src={audio} />
    </div>
  );
};

export default WordAudio;
