import React from "react";

const apiData = fetchData("https://jsonplaceholder.typicode.com/posts");

function post() {
  const data = apiData.read();

  return (
    <div className="post">
      <h1>Fetch like a Pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
export default post;

