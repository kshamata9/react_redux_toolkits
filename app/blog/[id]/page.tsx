import React from 'react';
export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  return (
    <div>
      <h1>Blog Post: {id}</h1>
    </div>
  );
}
