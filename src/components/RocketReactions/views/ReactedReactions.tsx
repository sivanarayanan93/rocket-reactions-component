import { EMOJI_NAME_MAPPING } from '../utils/app-utils';
import { TReactionsSummary, TSummary } from '../utils/types';
import EmojiIcon from '../utils/ui/EmojiIcon'
import Count from '../utils/ui/EmojiIcon/Count';

interface IReactedReactions extends TReactionsSummary {
  onHover: (tabId: string) => void
}

const ReactedReactions = ({summaries, onSelect, onHover, userId}: IReactedReactions) => {

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
