import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { UiReactionsPickerPopup } from '../style'
import EmojiIcon from '../utils/ui/EmojiIcon'

const ReactionsPickerTriggerPopup = ({reactions, onSelect, onClose}: any) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  });

  const handleOnSelect = (reaction: any) => {
    onSelect && onSelect(reaction);
    onClose && onClose();
  }

  return (
    <UiReactionsPickerPopup>
      {reactions && reactions.map((reaction: any) => (
        <span key={reaction.id}>
          <EmojiIcon data-for="reactions" data-tip={reaction.name} key={reaction.name} reaction={reaction} onSelect={handleOnSelect}>
            {reaction.emoji}
          </EmojiIcon>
          <ReactTooltip className="react-tooltip" id="reactions" place="top" effect="solid"/>
        </span>
      ))}
    </UiReactionsPickerPopup>
  )
}

export default ReactionsPickerTriggerPopup;
