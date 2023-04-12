import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Buttons/MyButton";
import { usePosts } from "./components/hooks/usePost";

function App() {

  const [posts , setPosts] = useState([
    {id:1, title: 'JS', body: 'javascript'},
    {id:2, title: 'JS2', body: '2javascript'},
    {id:3, title: 'JS3', body: '1javascript'},
    {id:4, title: 'JS4', body: '3javascript'}
  ])

  const[filter, setFilter] = useState({sort:'',query:''});
  const[modal, setModal] = useState(false);
  const sortAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{margin: '15px 0', borderColor: "teal" }}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortAndSearchPosts} title="Posts" remove={removePost} />
    </div>
  );
}

export default App;
