import React, { useState, useContext, createContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const apiUrl = "/api/quote";
    const { getToken } = useContext(UserProfileContext);

    const [posts, setPosts] = useState([]);

    const getAllPosts = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));


    const addPost = (post) =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));

    const getPost = (id) => {
        return fetch(`/api/post/${id}`)
            .then((res) => res.json());
    };

    const searchPosts = (searchTerm) => {
        if (!searchTerm) {
            getAllPosts()
            return
        }
        return fetch(`api/post/search?q=${searchTerm}&sortDesc=true`)
            .then((res) => res.json())
            .then(setPosts)
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, getPost }}>
            {props.children}
        </PostContext.Provider>
    );
};