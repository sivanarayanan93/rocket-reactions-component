import { UiReactor, UiReactors } from '../style';
import Avatar from '../utils/ui/Avatar';
import EmojiIcon from '../utils/ui/EmojiIcon';

const Reactors = ({ reactors, emoji }: { reactors: any, emoji: string}) => {
  return (
    <UiReactors>
      {reactors && reactors.map((reactor: any) => (
        <Reactor key={reactor.name + emoji} emoji={emoji} reactor={reactor} />
      ))}
    </UiReactors>
  )
}

const Reactor = ({reactor, emoji}: { reactor: any, emoji: string}) => {
  return (
    <UiReactor>
      <Avatar url={reactor.avatar}/>
      <EmojiIcon> {emoji} </EmojiIcon>

      <div>{reactor.name}</div>
    </UiReactor>
  )
}

export default Reactors;
