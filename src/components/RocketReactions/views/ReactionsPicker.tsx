import EmojiIcon from '../utils/ui/EmojiIcon';
import ReactionsPickerPopup from './ReactionsPickerPopup';
import { UiReactionsPicker } from '../style';
import { useEffect, useRef, useState } from 'react';
import useOutsideChecker from '../../../hooks/UseOutsideChecker';
import { getMatchedReactions } from '../utils/app-utils';
import { TOnSelect, TReaction } from '../utils/types';

type TReactionsPicket = {
  reactions?: TReaction[],
  onSelect?: TOnSelect
}

const ReactionsPickerTrigger = ({onSelect, reactions}: TReactionsPicket) => {
  const [showPickerItems, setShowPickerItems] = useState(false),
    targetRef = useRef(null),
    [availReactions, setAvailReactions] = useState<TReaction[]>([]);


  useEffect(() => {
    setAvailReactions(getMatchedReactions(reactions));
  }, [reactions])

  const handleOnClose = () => {
    setShowPickerItems(false)
  }

  const handleOnEmojiClick = () => {
    setShowPickerItems(true)
  }


  useOutsideChecker(targetRef, handleOnClose);


  return (
    <UiReactionsPicker ref={targetRef}>
      {showPickerItems && <ReactionsPickerPopup onClose={handleOnClose} onSelect={onSelect} reactions={availReactions} />}
      <EmojiIcon onSelect={handleOnEmojiClick} variant="rounded">R</EmojiIcon>
    </UiReactionsPicker>
  )
}

export default ReactionsPickerTrigger;
