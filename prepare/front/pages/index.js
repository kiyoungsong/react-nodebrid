// next는 import React from 'react'가 필요없음 있어도 상관없음
import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = () => {
    const {isLoggedIn} = useSelector((state) => state.user);
    const {mainPosts} = useSelector((state)=> state.post);
    return (
        <AppLayout>
            {isLoggedIn && <PostForm/>}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/> )}
        </AppLayout>
    );
}

export default Home;