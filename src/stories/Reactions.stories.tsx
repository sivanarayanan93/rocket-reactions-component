import { RocketReactions } from '../index';

export default {
  title: 'Example/Reactions',
  component: RocketReactions,
};

const Template= (args: any) => (<> <div style={{"height": "300PX", "display": "flex", "justifyContent": "center","alignItems": 'center'}}>
  <RocketReactions {...args}/>
  </div>
</>);

const summary = [{
  "emoji": "like",
  users: [{
    id: 1,
    name: 'Test User',
  },{
    id: 2,
    name: 'Test User1',
    avatar: 'http://dummyimage.com/147x121.png/ff4444/ffffff'
  }]
},
{
  "emoji": "Sad",
  users: [{
    id: 2,
    name: 'Test User1',
    avatar: 'http://dummyimage.com/147x121.png/ff4444/ffffff'
  }]
}]

const handlerOnSelect = (emoji:any) => {
  alert(emoji)
}

export const WithoutAnyArgumets = Template.bind({}) as any;
WithoutAnyArgumets.args = {
};

export const withReactionArguments = Template.bind({}) as any;
withReactionArguments.args = {
  reactions: ['like', 'Sad'],
  onSelect: handlerOnSelect,
  summary: summary,
  userId: 1
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
