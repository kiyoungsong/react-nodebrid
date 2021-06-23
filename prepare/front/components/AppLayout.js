import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {Menu, Input, Row, Col} from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const InputWrapper = styled(Input.Search)`
    vertical-align: middle;
`

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="1">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <InputWrapper enterButton/>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://www.zerocho.com" target="_blank" rel="noreferrer noopener">이동</a>
                </Col>
            </Row>
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;