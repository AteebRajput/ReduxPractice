import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdd } from "../../feature/post/postSlice";
import { selectAllUsers } from "../../feature/users/userSlice";
import "./AddForm.css";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserID] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions =
    users.length > 0 ? (
      users.map((user) => (
        <option value={user.id} key={user.id}>
          {user.name}
        </option>
      ))
    ) : (
      <option value="">No users available</option>
    );

  const onSavePost = () => {
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("UserId:", userId); // Log to ensure userId is captured

    if (title && content && userId) {
      // Correctly dispatching postAdd with three arguments
      dispatch(postAdd(title, content, userId));

      // Clear input fields after dispatch
      setTitle("");
      setContent("");
      setUserID("");
    }
  };

  return (
    <section className="main-form">
      <div className="heading">
        <h2>Add New Post</h2>
      </div>
      <div className="form">
        <form>
          <label htmlFor="postAuthor">Select Author:</label>
            <div>
            <select
            name="postAuthor"
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserID(e.target.value)}
          >
            <option value="">Select an author</option>
            {userOptions}
          </select>

            </div>
        

          <div className="coolinput">
            <label htmlFor="input" className="text">
              Post Title:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="postTitle"
              id="postTitle"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="coolinput">
            <label htmlFor="input" className="text">
              Post Content:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="postContent"
              id="postContent"
              className="input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>


        </form>

          <button className="button type1" type="button" onClick={onSavePost} disabled={!canSave}>
            Add Post
          </button>
      </div>
    </section>
  );
};

export default AddPostForm;
