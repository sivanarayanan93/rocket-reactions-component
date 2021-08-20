import { useState, useEffect, useRef } from 'react'
import useOutsideChecker from '../../../hooks/UseOutsideChecker';
import { getDefaultSummary } from '../utils/app-utils';
import ReactedReactions from './ReactedReactions'
import ReactionSummaryPopup from './ReactionSummaryPopup';


const getUpdatedSummary = (summary: any) => {
  const updatedSummary = [...summary];

  let allTab = { emoji: 'All', users: []} as any;

  let allUsers = [] as any;

  for(let reaction of updatedSummary) {
    allUsers = allUsers.concat(reaction.users);
  }

  const uniqueUsersNames = [...new Set(allUsers.map((item:any) => item.name)) as any];

  for(let userName of uniqueUsersNames) {
    let user = allUsers.find((item: any) => item.name === userName);
    if (user) {
      allTab.users.push(user);
    }
  }

  updatedSummary.unshift(allTab)

  return updatedSummary;
}


const ReactionsSummary = ({summary, onSelect, user}: any) => {
  const [currentTab, setCurrentTab] = useState(0),
    [availableSummary, setAvailableSummary] = useState<any>(null),
    [showSummary, setShowSummary] = useState(false),
    [currentTabSummary, setCurrentTabSummary] = useState({emoji: '', users: []}),
    targetRef = useRef(null);

  useEffect(() => {
    const updatedSummary = getUpdatedSummary(Array.isArray(summary) ? summary : getDefaultSummary());
    setAvailableSummary(updatedSummary);
  }, [summary])

  const handleOnHoverReaction = (tabId: number) => {
    setCurrentTab(tabId)
    setShowSummary(true)
  }

  const handleOnSelectTab = (tabId: any) => {
    setCurrentTab(tabId);
    updateReactorState(availableSummary, tabId);
  }

  const updateReactorState = (reactions: any, tabId:any) => {
    const selectedReactions = reactions.find((item: any) => item.emoji === tabId);

    if(selectedReactions) {
      setCurrentTabSummary(selectedReactions);
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
      {showSummary &&
        <ReactionSummaryPopup handleOnSelectTab={handleOnSelectTab} currentTab={currentTab} reactions={availableSummary} users={currentTabSummary.users} emoji={currentTabSummary.emoji}/>
      }
      <ReactedReactions reactions={availableSummary} onHover={handleOnHoverReaction} onSelect={onSelect} user={user}/>
    </div>
  )
}

export default ReactionsSummary
