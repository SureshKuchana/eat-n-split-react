import { friendsListProps, friendProps } from '../types/friendsTypes';
import Friend from './Friend';

const FriendsList = ({ friends }: friendsListProps) => {
  return (
    <ul>
      {friends.map((friend: friendProps) => (
        <Friend
          key={friend.id}
          friend={friend}
          onClick={() => {
            console.log;
          }}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
