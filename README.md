# [Rocket Reactions](https://github.com/sivanarayanan93/rocket-reactions/tree/fix-comments)

# Installation:
```
yarn add @sivanarayanan93/rocket-reactions or npm i @sivanarayanan93/rocket-reactions

```

# Reactions

Example:

```
  import React from 'react';
  import { RocketReactions } from '@sivanarayanan93/rocket-reactions';

  const Component = () => {
    return (
      <RocketReactions />
    )
  }

```

**Props:**

`reactions`: Array of reaction value. Defaults: `['Like', 'Love', 'Haha', 'Wow', 'Sad', 'Angry']`

`onSelect`: Callback function when emoji is selected - Output arg: `'like'`

`userId`: Id of logged-in user

`Summary`: Array of reacted reactions with reactors

  ```
    Ex:

    [{
      emoji: 'Like',
      users: [{
        id, name, avatar(optional)
      }]
    }]
  ```

**Global styles**

```
  import React from 'react';
  import { RocketReactions, GlobalStyles } from '@sivanarayanan93/rocket-reactions';

  const Component = () => {
    return (
      <GlobalStyles />
      <RocketReactions />
    )
  }
```