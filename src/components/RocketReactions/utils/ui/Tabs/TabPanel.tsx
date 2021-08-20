import { TChildren } from "../../Types";
import { UiTabPanel } from "./styles";

const TabPanel = ({children, ...props}: TChildren) => {
  return (
    <UiTabPanel {...props}>
      {children}
    </UiTabPanel>
  )
}

export default TabPanel
