// next에서 자동으로 넣어주기 때문에 넣어도 되고 안 넣어도 됨!
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const Home = () => {
    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);

    useEffect(() => {
        if (retweetError) {
            alert(retweetError);
        }
    }, [retweetError]);

    useEffect(() => {
        dispatch({
            type: LOAD_MY_INFO_REQUEST,
        });
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            // scrollY : 얼마나 내렸는지, clientHeight: 현재 화면의 세로 길이, scrollHeight: 총 길이
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 400) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts, hasMorePosts, loadPostsLoading]);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => (<PostCard key={post.id} post={post} />))}
        </AppLayout>
    );
};

export default Home;
