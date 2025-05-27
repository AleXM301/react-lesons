import {useContext, useEffect, useState} from "react";

import {getPosts} from "../../components/api/post";
import {ThemeContext} from "../../contexts/ThemeContext";

import styles from "./style.module.css";


export default function Post() {
    const {theme} = useContext(ThemeContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [])

    if (loading) {
        return <h3>Fetching posts...</h3>
    }
    return (
        <div className={styles["post-wrapper"]}>
            <h3>Post </h3>
            <div className={`${styles[`post-container`]} ${styles[`mode-${theme}`]}`}>
                {posts.map(post => (
                    <div key={post.id} className={`${styles[`post`]} ${styles[`mode-${theme}`]}`}>
                        <h3 className={styles[`post-title`]}> {post.title}</h3>
                        <p className={styles[`post-body`]}>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};