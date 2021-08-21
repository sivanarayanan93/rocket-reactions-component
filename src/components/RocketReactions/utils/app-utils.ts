import likeIcon from '../assets/like.png';
import loveIcon from '../assets/love.png';
import angryIcon from '../assets/angry.png';
import wowIcon from '../assets/wow.png';
import sadIcon from '../assets/sad.png';
import hahaIcon from '../assets/haha.png';

const defaultReactions = [
  {
    "id": 1,
    "name": "Like",
    "emoji": "👍"
  },
  {
    "id": 2,
    "name": "Love",
    "emoji": "❤️"
  },
  {
    "id": 3,
    "name": "Haha",
    "emoji": "😂"
  },
  {
    "id": 4,
    "name": "Wow",
    "emoji": "😮"
  },
  {
    "id": 5,
    "name": "Sad",
    "emoji": "😥"
  },
  {
    "id": 6,
    "name": "Angry",
    "emoji": "😡"
  }
]

export const EMOJI_NAME_MAPPING = {
  like: "👍",
  love: "❤️",
  haha: "😂",
  wow: "😮",
  sad: "😥",
  angry: "😡"
} as any;

export const IMG_MAPPING = {
  like: likeIcon,
  love: loveIcon,
  haha: hahaIcon,
  wow: wowIcon,
  sad: sadIcon,
  angry: angryIcon,
} as any;

export const getDefaultAvataorURL = () => {
  return 'http://dummyimage.com/128x134.png/dddddd/000000';
}

export const getMatchedReactions = (reactions: any) => {

  if (reactions) {
    reactions = reactions.map((item:any) => String(item.toLowerCase()));
    return defaultReactions.filter(item => reactions.includes(String(item.name).toLowerCase()));
  }
  
  return defaultReactions;
}

export const getUpdatedSummary = (summary: any) => {
  let updatedSummary = Array.isArray(summary) ? summary.filter((item) => item.users && item.users.length) : [];

  if (updatedSummary.length) {
    let allTab = { emoji: 'All', users: []} as any;

    let allUsers = [] as any;

    updatedSummary.forEach((reaction) => {
      reaction.emoji = String(reaction.emoji).toLowerCase();
      allUsers = allUsers.concat(reaction.users);
    })

    if (allUsers.length) {
      const uniqueUserIds = [...new Set(allUsers.map((item:any) => item.id)) as any];

      for(let userId of uniqueUserIds) {
        let user = allUsers.find((item: any) => item.id === userId);
        if (user) {
          allTab.users.push(user);
        }
      }
    }

    updatedSummary.unshift(allTab)

  }

  return updatedSummary;
}