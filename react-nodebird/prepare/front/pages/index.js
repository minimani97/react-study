import React from 'react';  // next에서 자동으로 넣어주기 때문에 넣어도 되고 안 넣어도 됨!
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;