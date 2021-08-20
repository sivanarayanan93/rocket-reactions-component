import EmojiIcon from '../utils/ui/EmojiIcon'
import Count from '../utils/ui/EmojiIcon/Count';

const ReactedReactions = ({reactions, onSelect, onHover, user}: any) => {

  const userId = user && user.id;

  return (
    <div>
    {reactions && reactions.filter((reaction: any) => reaction.emoji !== 'All').map((reaction: any) => (
        <EmojiIcon onHover={onHover} isSelected={reaction.users && reaction.users.find((item: any) => item.id === userId)} onSelect={onSelect} reaction={reaction} variant="bordered" key={reaction.emoji}>
          {reaction.emoji}<Count>{reaction.users && reaction.users.length}</Count>
        </EmojiIcon>
      ))}
    </div>
  )
}

export default ReactedReactions;
