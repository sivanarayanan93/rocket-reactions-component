import { UiReactor, UiReactors } from '../style';
import { EMOJI_NAME_MAPPING } from '../utils/app-utils';
import { TUser } from '../utils/types';
import Avatar from '../utils/ui/Avatar';
import EmojiIcon from '../utils/ui/EmojiIcon';

type TReactors = {
  reactors: TUser[],
  emoji: string
}

const Reactors = ({ reactors, emoji }: TReactors) => {
  return (
    <UiReactors>
      {reactors && reactors.map((reactor: TUser) => (
        <Reactor key={reactor.id + emoji} emoji={emoji} reactor={reactor} />
      ))}
    </UiReactors>
  )
}

const Reactor = ({reactor, emoji}: { reactor: TUser, emoji: string}) => {
  {/* Assiging like emoji for all tab*/}
  const emojiIcon = emoji === 'All' ? '👍' : EMOJI_NAME_MAPPING[emoji];
  return (
    <UiReactor>
      <Avatar url={reactor.avatar}/>
      <EmojiIcon> {emojiIcon} </EmojiIcon>

      <div>{reactor.name}</div>
    </UiReactor>
  )
}

export default Reactors;
