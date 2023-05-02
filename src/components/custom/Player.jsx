import { useAudio } from "hooks";
import { ImSoundcloud } from "react-icons/im";

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  const onColor = "#FF4141";
  const bg = "#193256";
  return (
    <button
      onClick={toggle}
      style={{
        backgroundColor: playing ? bg : null,
        color: playing ? onColor : null,
      }}
      className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
    >
      {/* Sound */}
      {/* <span style={{ color: playing ? onColor : null }}>
        {playing ? "ON" : "OFF"}
      </span> */}
      <ImSoundcloud size={30} color={playing ? onColor : null} />
    </button>
  );
};

export default Player;
