import { TChildren } from '../../types';
import { UiTabs } from './styles';

const Tabs = ({children, ...props}: TChildren) => {
  return (
    <UiTabs {...props}>
      {children}
    </UiTabs>
  )
}

export default Tabs;
