import PostList from "./component/post/PostList"
import AddPostForm from "./component/post/AddPostForm"
import './App.css'
const App = () => {
  return (
    <div className="main">
      <div className="form-component">
      <AddPostForm />
      </div>
      <div className="post-component">
      <PostList />
      </div>
    </div>
  )
}

export default App
