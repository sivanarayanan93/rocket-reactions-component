import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { UiReactionsPickerPopup } from '../style'
import { EMOJI_NAME_MAPPING } from '../utils/app-utils';
import { TReaction } from '../utils/types';
import EmojiIcon from '../utils/ui/EmojiIcon'

type TReactionsPickerTriggerPopup = {
  reactions: TReaction[],
  onSelect?: (emoji: string) => void,
  onClose: (e?: React.MouseEvent) => void
}

const ReactionsPickerTriggerPopup = ({reactions, onSelect, onClose}: TReactionsPickerTriggerPopup) => {
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
        <span key={reaction.name}>
          <EmojiIcon data-for="reactions" data-tip={reaction.name} emoji={reaction.name.toLowerCase()} onSelect={handleOnSelect}>
            {reaction.emoji}
          </EmojiIcon>
          <ReactTooltip className="react-tooltip" id="reactions" place="top" effect="solid"/>
        </span>
      ))}
    </UiReactionsPickerPopup>
  )
}

export default ReactionsPickerTriggerPopup;
