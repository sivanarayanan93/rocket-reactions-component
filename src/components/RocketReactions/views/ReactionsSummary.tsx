import { useState, useEffect, useRef } from 'react'
import useOutsideChecker from '../../../hooks/UseOutsideChecker';
import { getUpdatedSummary } from '../utils/app-utils';
import { TReactionsSummary } from '../utils/types';
import ReactedReactions from './ReactedReactions'
import ReactionSummaryPopup from './ReactionSummaryPopup';


const ReactionsSummary = ({summaries, onSelect, userId}: TReactionsSummary) => {
  const [currentTab, setCurrentTab] = useState(''),
    [availableSummary, setAvailableSummary] = useState<any>(null),
    [showSummary, setShowSummary] = useState(false),
    [currentTabSummary, setCurrentTabSummary] = useState({emoji: '', users: []}),
    targetRef = useRef(null);

  useEffect(() => {
    const updatedSummary = getUpdatedSummary(summaries);
    setAvailableSummary(updatedSummary);
  }, [summaries])

  const handleOnHoverReaction = (tabId: string) => {
    setCurrentTab(tabId)
    setShowSummary(true)
  }

  const handleOnSelectTab = (tabId: string) => {
    setCurrentTab(tabId);
    updateReactorState(availableSummary, tabId);
  }

  const updateReactorState = (reactions: any, tabId:string) => {
    const selectedReactions = reactions.find((item: any) => item.emoji === tabId);

    if(selectedReactions) {
      setCurrentTabSummary(selectedReactions);
    } else if(reactions && reactions.length) {
      setCurrentTab(reactions[reactions.length - 1].emoji);
    }
  }

  useEffect(() => {
    if (availableSummary && availableSummary.length && currentTab) {
      updateReactorState(availableSummary, currentTab);
    }
  }, [availableSummary, currentTab]);

  const closeSummary = () => {
    setShowSummary(false);
  }

  useOutsideChecker(targetRef, closeSummary);

  return (
    <div ref={targetRef} style={{"position": "relative"}}>
      {availableSummary && availableSummary.length > 0 &&
        <>
          {showSummary &&
            <ReactionSummaryPopup handleOnSelectTab={handleOnSelectTab} currentTab={currentTab} summaries={availableSummary} users={currentTabSummary.users} emoji={currentTabSummary.emoji}/>
          }

          <ReactedReactions summaries={availableSummary} onHover={handleOnHoverReaction} onSelect={onSelect} userId={userId}/>
        </>
      }
    </div>
  )
}

export default ReactionsSummary
