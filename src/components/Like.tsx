import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(true);

  return (
    <>
      {liked ? (
        <IoIosHeart
          onClick={() => {
            setLiked(false);
            onClick();
          }}
          color="red"
          size={50}
        />
      ) : (
        <IoIosHeartEmpty
          onClick={() => {
            setLiked(true);
            onClick();
          }}
          color="red"
          size={50}
        />
      )}
    </>
  );
};

export default Like;
