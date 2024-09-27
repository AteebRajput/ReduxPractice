import { useSelector } from 'react-redux';
import PostAuthor from '../../feature/post/PostAuthor';
import Timeago from '../../feature/TimeStamp';
import './PostList.css'

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Log the sorted posts to check for issues
  console.log('Sorted Posts:', sortedPosts);

  const renderedPost = sortedPosts.map((post) => (
    <article className='post-main' key={post.id}>
      {/* Ensure title and content are valid strings */}
      <h3 className='title'>{typeof post.title === 'string' ? post.title : 'Untitled Post'}</h3>
      <p content=''>{typeof post.content === 'string' ? post.content : 'No content available'}</p>
      <div className='details'>
      <p className='author'>
        <PostAuthor userId={post.userId} />
      </p>
      <div className="time">
      <Timeago timestamp={post.date} />
      </div>
      </div>
    </article>
  ));

  return (
    <div className='post-list'>
      <div className="heading">
      <h2>Posts</h2>
      </div>
      {renderedPost}
    </div>
  );
};

export default PostList;
