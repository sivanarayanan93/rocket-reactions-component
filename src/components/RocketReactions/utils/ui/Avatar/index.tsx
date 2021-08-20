import styled from "styled-components";
import { getDefaultAvataorURL } from "../../app-utils";

const UiAvatar = styled.div`  
  display: inherit;
  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
`

const defaultAvatar = getDefaultAvataorURL();

const Avatar = ({ url }: { url: string}) => {
  return (
    <UiAvatar>
      <img alt="Avatar" src={url || defaultAvatar} />
    </UiAvatar>
  )
}

export default Avatar;
