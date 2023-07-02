export type friendsListProps = { friends: friendProps[] };

export type friendProps = {
  balance: number;
  id: number;
  image: string;
  name: string;
};

export type friendsPropsType = {
  onClick?: () => void;
  friend: friendProps;
};
