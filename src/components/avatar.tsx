import { botttsNeutral } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import Image from "next/image";

export interface AvatarProps {
  username: string;
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ username, size }) => {
  return (
    <Image
      src={createAvatar(botttsNeutral, {
        size: 128,
        seed: username
      }).toDataUriSync()}
      alt={`${username}'s avatar`}
      className="rounded-full"
      width={size}
      height={size}
    />
  );
};

export default Avatar;
