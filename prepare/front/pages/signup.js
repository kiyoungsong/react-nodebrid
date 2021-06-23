import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Form, Input } from 'antd';
import AppLayout from "../components/AppLayout";

const Signup = () => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [nickname, setNickname] = useState("");

    const onChange = useCallback((e) => {
        const {name} = e.target.value;
    },[]);
    const onSubmit = useCallback(
        () => {
            
        },
        [],
    )
    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-pwd">비밀번호</label>
                    <br/>
                    <Input name="user-pwd" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br/>
                    <Input name="user-nickname" value={id} required onChange={onChangeId}/>
                </div>
            </Form>
        </AppLayout>
    );
}

export default Signup;
