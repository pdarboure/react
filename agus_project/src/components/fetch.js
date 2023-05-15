import React from 'react';


export const Posts = () => {
return <button onClick={() => {
fetch('https://jsonplaceholder.typicode.xyz/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
}}>
Trear datos
</button>
}

export default fetch;

