export default async function getAllPosts() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return data.json();
}
