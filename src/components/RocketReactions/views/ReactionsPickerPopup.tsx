import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { UiReactionsPickerPopup } from '../style'
import { IMG_MAPPING } from '../utils/app-utils';
import { TReaction } from '../utils/types';
import EmojiIcon from '../utils/ui/EmojiIcon';

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
      {reactions && reactions.map((reaction: any) => {
        const emoji = String(reaction.name).toLowerCase();

        return <span key={reaction.name}>
          <EmojiIcon data-for="reactions" data-tip={reaction.name} emoji={emoji} onSelect={handleOnSelect}>
            <img alt={emoji} src={IMG_MAPPING[emoji]} width="16" height="16" />
          </EmojiIcon>
          <ReactTooltip delayShow={200} className="react-tooltip" id="reactions" place="top" effect="solid"/>
        </span>
      })}
    </UiReactionsPickerPopup>
  )
}

export default ReactionsPickerTriggerPopup;
