import { UiRocketReactions } from './style';
import ReactionsPicker from './views/ReactionsPicker';
import ReactionsSummary from './views/ReactionsSummary';

const RocketReactions = ({reactions, onSelect, summary, user}: any) => {
  return (
    <UiRocketReactions>
      <ReactionsSummary summary={summary} onSelect={onSelect} user={user}/>
      <ReactionsPicker onSelect={onSelect} reactions={reactions} />
    </UiRocketReactions>
  )
}

export default RocketReactions;
