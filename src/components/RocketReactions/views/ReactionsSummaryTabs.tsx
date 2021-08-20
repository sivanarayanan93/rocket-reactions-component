import { EMOJI_NAME_MAPPING } from '../utils/app-utils'
import { TOnSelect, TSummary } from '../utils/types'
import EmojiIcon from '../utils/ui/EmojiIcon'
import Count from '../utils/ui/EmojiIcon/Count'
import Tabs from '../utils/ui/Tabs'
import Tab from '../utils/ui/Tabs/Tab'

type TReactionsSummaryTabs = {
  tabs: TSummary[],
  currentTab: string,
  onSelectTab: TOnSelect
}

type TTabWrapper = {
  emoji: string,
  count: number,
  onSelectTab: TOnSelect,
  isActive: boolean
}

const ReactionsSummaryTabs = ({tabs, currentTab, onSelectTab}: TReactionsSummaryTabs) => {
  const tabList = tabs && tabs.map((tab) => {
    const { emoji, users } = tab,
      count = users && users.length;
    return count !== 0 && <TabWrapper key={emoji} emoji = {emoji} count={count} onSelectTab = {onSelectTab} isActive={currentTab === emoji} />
  });

  return (
    <Tabs>
      {tabList}
    </Tabs>
  )
}

const TabWrapper = ({emoji, count, onSelectTab, isActive}: TTabWrapper) => {
  const emojiIcon = EMOJI_NAME_MAPPING[emoji];
  return (
    <Tab id={emoji} key={emoji} onClick={() => onSelectTab(emoji)} isActive={isActive}>
      <EmojiIcon>
          {emojiIcon || emoji}
          {emoji !== 'All' && 
            <>
              <Count>.</Count>
              <Count>{count}</Count>
            </>
          }
      </EmojiIcon>
    </Tab>
  )
}

export default ReactionsSummaryTabs
