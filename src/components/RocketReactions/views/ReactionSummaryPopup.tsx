import ReactionsSummaryTabs from './ReactionsSummaryTabs'
import TabPanel from '../utils/ui/Tabs/TabPanel';
import Reactors from './Reactors';
import { UiSummary } from '../style';
import { useLayoutEffect, useRef, useState } from 'react';

const ReactionSummaryPopup = ({handleOnSelectTab, summaries, currentTab, users, emoji}: any) => {
  const [top, setTop] = useState(0),
    targetRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ele = targetRef.current,
      parentEle = ele && ele.offsetParent as HTMLElement;

    if (parentEle) {
      setTop(parentEle.offsetTop >= 310 ? -310 : 40);
    }
  }, [targetRef])

  return (
    <UiSummary ref={targetRef} position={top + 'px'}>
      <h4>Reactions</h4>
      <ReactionsSummaryTabs onSelectTab={handleOnSelectTab} tabs={summaries} currentTab={currentTab}/>

      <TabPanel>
        {/* Assiging love emoji for all tab*/}
        <Reactors emoji={currentTab === 'All' ? '❤️' : emoji} reactors={users}/>
      </TabPanel>
    </UiSummary>
  )
}

export default ReactionSummaryPopup;
