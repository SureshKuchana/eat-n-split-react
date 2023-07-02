import { useState } from 'react';
import AddFriend from './components/AddFriend';
import Button from './components/Button';
import FriendsList from './components/FriendsList';

const initialFriends = [
  {
    balance: -7,
    id: 118836,
    image: 'https://i.pravatar.cc/48?u=118836',
    name: 'Clark',
  },
  {
    balance: 20,
    id: 933372,
    image: 'https://i.pravatar.cc/48?u=933372',
    name: 'Sarah',
  },
  {
    balance: 0,
    id: 499476,
    image: 'https://i.pravatar.cc/48?u=499476',
    name: 'Anthony',
  },
];

function App() {
  const [showAddFriend, setAddBtn] = useState(false);

  return (
    <div className="App">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        {!showAddFriend && (
          <Button onClick={() => setAddBtn(true)}>Add friend</Button>
        )}
        {showAddFriend && (
          <>
            <AddFriend />
            <Button onClick={() => setAddBtn(false)}>Close</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
