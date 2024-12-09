export default async function getPost(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data.json();
}
