import React from "react";

function DynamicPage({ params }) {
  const { id } = params;
  return (
    <div>
      <h1 className="">This is dynamic id {id}</h1>
    </div>
  );
}

export default DynamicPage;
