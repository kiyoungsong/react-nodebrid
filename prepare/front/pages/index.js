// next는 import React from 'react'가 필요없음 있어도 상관없음
import React from 'react';
import AppLayout from "../components/AppLayout";

const Home = () => {
    return (
        <AppLayout>
            <div>Hello Next!</div>
        </AppLayout>
    );
}

export default Home;