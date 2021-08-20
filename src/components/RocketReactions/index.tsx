import { UiRocketReactions } from './style';
import { TRocketReactions } from './utils/types';
import ReactionsPicker from './views/ReactionsPicker';
import ReactionsSummary from './views/ReactionsSummary';

const RocketReactions = ({reactions, onSelect, summary, userId}: TRocketReactions) => {
  return (
    <UiRocketReactions>
      <ReactionsSummary summary={summary} onSelect={onSelect} userId={userId}/>
      <ReactionsPicker onSelect={onSelect} reactions={reactions} />
    </UiRocketReactions>
  )
}

export default RocketReactions;
