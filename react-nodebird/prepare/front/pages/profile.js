import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname: '제로초' }, { nickname: '이재욱' }, { nickname: 'NodeBird Official'}];
    const followingList = [{ nickname: '제로초' }, { nickname: '이재욱' }, { nickname: 'NodeBird Official'}];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉" data={followingList} />
                <FollowList header="팔로워" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;