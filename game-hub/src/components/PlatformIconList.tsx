import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';

const iconMap: { [key: string]: IconType } = {
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  pc: FaWindows,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  android: FaAndroid,
  web: BsGlobe,
};

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          aria-label={platform.name}
          title={platform.name}
          color="gray.500"
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
