import React, {useState} from "react";
import MyButton from "./UI/Buttons/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({create}) => {
    const[post, setPost] = useState( {title:'', body:''});
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post , id: Date.now()
        }
        create(newPost);
        setPost({title:'', body:''})
        
    }

    return (
        <form>
        <MyInput
          value={post.title}
          onChange = {e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Name"
        />
        <MyInput
          value={post.body}
          onChange = {e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Desc"
        />
        
        <MyButton onClick={addNewPost} > Create </MyButton> 
      </form>    
    );
};

export default PostForm;