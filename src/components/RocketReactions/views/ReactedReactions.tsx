import { EMOJI_NAME_MAPPING } from '../utils/app-utils';
import { TOnSelect, TSummary } from '../utils/types';
import EmojiIcon from '../utils/ui/EmojiIcon'
import Count from '../utils/ui/EmojiIcon/Count';

type TReactedReactions = {
  summaries?: TSummary[],
  onSelect?: TOnSelect,
  onHover?: (tabId: string) => void,
  userId?: string | number
}

const ReactedReactions = ({summaries, onSelect, onHover, userId}: TReactedReactions) => {

  return (
    <div>
    {summaries && summaries.filter((summary: TSummary) => summary.emoji !== 'All').map((summary: TSummary) => {
      return <EmojiIcon onHover={onHover} isSelected={summary.users && summary.users.find((item: any) => item.id === userId)} onSelect={onSelect} emoji={summary.emoji} variant="bordered" key={summary.emoji}>
          {EMOJI_NAME_MAPPING[summary.emoji]}<Count>{summary.users && summary.users.length}</Count>
        </EmojiIcon>
    })}
    </div>
  )
}

export default ReactedReactions;
