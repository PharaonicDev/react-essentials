// // import logo from './logo.svg';
// import React , {useState, useEffect}from "react";
// import './App.css';

// // https://api.github.com/users/abobakr11
// function App({ login }) {
// const [ data, setData] = useState(null);
// const [loading, setLoading] = useState(false);
// const [ error , setError] = useState(null);

// useEffect(() => {
//   if(!login) return;
//   setLoading(true);
//   fetch('http://api.github.com/users/${login}')
//   .then((response) => response.json())
//   .then(setData)
//   .then(() => setLoading(false))
//   .catch(setError);
// }, [login]);

// if (loading) return <h1>Loading ....</h1>;
// if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
// if(!data) return null;
// if (data) {
//   return (
//     <div><h1>{data.name}</h1></div>
//   );
// }

  
// }

// export default App;


// import React , { useState } from 'react';

// function App() {

//   const [count, setCount] = useState(0);
//    // Declare multiple state variables!
//    const [age, setAge] = useState(42);
//    const [fruit, setFruit] = useState('banana');
//    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

//    useEffect(() => {
//      effect
//      return () => {
//        cleanup
//      }
//    }, [input])

//   return (
//     <div>
//       <p> You Clicked {count} Times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click Me
//       </button>
//     </div>


//   );
// }

//  export default App;

// import React, { useState, useEffect } from 'react';

// function App(props) {
//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }

// export default App;


