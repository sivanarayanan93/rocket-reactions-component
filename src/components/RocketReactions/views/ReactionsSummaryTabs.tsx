import EmojiIcon from '../utils/ui/EmojiIcon'
import Count from '../utils/ui/EmojiIcon/Count'
import Tabs from '../utils/ui/Tabs'
import Tab from '../utils/ui/Tabs/Tab'

const ReactionsSummaryTabs = ({summary, currentTab, onSelectTab}: any) => {
  return (
    <Tabs>
      {summary && summary.map((tab: any) => (
        <Tab id={tab.emoji} key={tab.emoji} onClick={() => onSelectTab(tab.emoji)} isActive={currentTab === tab.emoji}>
          <EmojiIcon>
              {tab.emoji}
              {tab.users && tab.emoji !== 'All' && 
                <>
                  <Count>.</Count>
                  <Count>{tab.users.length}</Count>
                </>
              }
          </EmojiIcon>
        </Tab>
      ))}
    </Tabs>
  )
}

export default ReactionsSummaryTabs
