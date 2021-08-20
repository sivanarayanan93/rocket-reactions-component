export const getDefaultReactions = () => {
  return [
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
};

export const getDefaultSummary = () => {
  return [{
    "emoji": "👍",
    users: [{
      name: 'Test User',
      avatar: getDefaultAvataorURL()
    },{
      name: 'Test User1',
      avatar: getDefaultAvataorURL()
    }]
  },
  {
    "emoji": "😥",
    users: [{
      name: 'Test User1',
      avatar: getDefaultAvataorURL()
    }]
  }  
  ]
}

export const getDefaultAvataorURL = () => {
  return 'http://dummyimage.com/128x134.png/dddddd/000000';
}

export const getMatchedReactions = (reactions: any) => {

  const defaultReactions = getDefaultReactions();

  reactions = reactions ? reactions.map((item:any) => String(item.toLowerCase())) : defaultReactions;

  
  const availReactions = defaultReactions.filter(item => reactions.includes(item.name.toLowerCase()));
  
  return availReactions.length ? availReactions : defaultReactions;
}