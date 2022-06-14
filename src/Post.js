import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./Action";

const Post = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // const renderPost=()=>{
  //   if(state.loading){
  //     return <h1>loading</h1>
  //   }
  //   return state.items.map((el)=>{
  //     return (
  //     <h1>{el.name}</h1>
  //     )
  //   })
  // }
  return (
    <div>
      {/* {renderPost()} */}
      {state.items.map((el) => {
        return <h1>{el.price}</h1>;
      })}
    </div>
  );
};

export default Post;
