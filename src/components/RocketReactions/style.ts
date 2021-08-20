import styled from "styled-components";
import { COLORS } from "./utils/constants";

export const UiReactionsPicker = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  .added-reactions {
    line-height: 40px;
  }
`

type TUiReactionsPopup = {
  [key: string]: any
};

export const UiRocketReactions = styled.div`
  display: flex;
  padding: 10px 0;

  .react-tooltip {
    background-color: #161616!important;
    border-radius: 2px !important;
    color: #fff !important;
    font-size: 12px !important;
    padding: 12px 16px !important;
  }
  
  .emoji-count {
    cursor: pointer;
    font-size: 15px;
    padding-left: 8px;
  }
`

export const UiReactionsPickerPopup = styled.div<TUiReactionsPopup>`
  height: 32px;
  background-color: ${COLORS.WHITE};
  border-radius: 24px;
  box-shadow: 0px 1px 2px 1px lightgray;
  position: absolute;
  top: -40px;
  left: ${props =>`${props.left}px`};
  display: flex;
  align-items: center;
  padding: 0 8px;

  span {
    padding: 8px;
    display: flex;
    align-items: center;
  }

  button {
    min-width: 16px;
    padding: 0 .5px;
    max-height: 16px;
    display: flex;
    align-items: center;

    :hover {
      background: transparent;
      transform: scale(2);
      transform-origin: 8px 16px;
      animation: scale .2s ease-in-out;
    }

    @keyframes scale {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(2);
      }
    }
  }

  .react-tooltip {
    background-color: #161616!important;
    border-radius: 2px !important;
    color: #fff !important;
    font-size: 12px !important;
    padding: 12px 16px !important;
  }
`;

type TUiSummary = {
  position?: string
}

export const UiSummary = styled.div<TUiSummary>`
  background-color: ${COLORS.WHITE};
  border-radius: 4px;
  box-shadow: 0px 1px 4px 2px ${COLORS.LIGHT_GRAY};
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  min-width: 300px;
  top: ${props => `${props.position}`};
  z-index: 999;

  h4 {
    padding: 0 16px;
    margin-bottom: 0px;
  }
`

export const UiReactors = styled.div`
  padding: 0 16px;
`

export const UiReactor = styled.div`  
display: flex;
align-items: center;
padding: 8px 0;
`