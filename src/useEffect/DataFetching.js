/** @format */

import React from "react";
import axios from "axios";

// data fetching with use effect
// srtep 1 do npm install axios
//step 2 import axios from the package
function DataFetching() {
  const [post, setPost] = React.useState({});
  const [id, setId] = React.useState(1);
  const [idFromButtonClicked, setIdFromButtonClick] = React.useState(1);
  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClicked}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClicked]);
  //it will depend on the id instad of empty array bcos it is the id that is changing the mai n content of teh dom
  return (
    <div>
      {/* navigate to json placeholder */}
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
