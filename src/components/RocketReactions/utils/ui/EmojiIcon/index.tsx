import { EMOJI_NAME_MAPPING } from '../../app-utils';
import { UiEmojiIcon } from './styles';



const EmojiIcon = ({ variant, onSelect, children, emoji, onHover, isSelected, ...props }: any) => {
  const handleOnClick = () => {
    if (onSelect) {
      onSelect(emoji);
    }
  }

  return (
    <UiEmojiIcon {...props} isSelected={isSelected} variant={variant} onMouseOver={() => onHover ? onHover(emoji): ''} onClick={handleOnClick}>
      {children}
    </UiEmojiIcon>
  )
}

export default EmojiIcon;