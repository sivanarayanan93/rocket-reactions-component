import styled from 'styled-components'

const UiCount = styled.span`
  cursor: pointer;
  font-size: 15px;
  padding-left: 8px;
`

const Count = ({ children}: any) => {
  return (
    <UiCount>{children}</UiCount>
  )
}

export default Count
