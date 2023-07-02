import Button from './Button';

export default function AddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">Friend Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="image">Image URL</label>
      <input type="text" name="image" id="image" />

      <Button>Add</Button>
    </form>
  );
}
