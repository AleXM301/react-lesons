import {useDispatch, useSelector} from 'react-redux';
import {ThemeContext} from "../../contexts/ThemeContext";
import {getAllPosts} from "../../store/thunks/postsThunk";

import styles from "./style.module.css";
import {useEffect, useContext} from "react";


export default function Post() {
    const dispatch = useDispatch();

    const {theme} = useContext(ThemeContext);

    const {posts, loadingPosts, error} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);
    if (loadingPosts) {
        return <h2>Loading posts...</h2>
    }

    if (error) {
        return <span> Error:{error} </span>
    }

    return (
        <div className={styles["post-wrapper"]}>
            <h1 className={`${styles[`post-global-title`]} ${styles[`mode-${theme}`]}`}>Post </h1>
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