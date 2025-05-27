const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
    const response = await fetch(`${POST_URL}?_limit=120`)

    if (!response.ok){
        throw new Error("Could not fetch posts.");
    }
    return response.json();
}