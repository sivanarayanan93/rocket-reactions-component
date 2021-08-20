export type TStringOrNumber = string | number; 
export type TChildren = { children : React.ReactNode };
export type TAction = {
  type: string,
  payload: {
    [key: string]: any
  }
}

export type TReaction = {
  emoji: string
}

export type TSummary = {
  emoji: string,
  users: TUser[]
}

export type TUser = {
  id: string | number
  name: string,
  avatar?: string
}

export type TOnSelect = (tabId: string) => void | undefined

export type TRocketReactions = {
  reactions?: TReaction[],
  onSelect?: TOnSelect,
  summary?: TSummary[],
  userId?: string | number
}

export type TReactionsSummary = {
  summaries?: TSummary[],
  onSelect?: TOnSelect,
  userId?: string | number
}