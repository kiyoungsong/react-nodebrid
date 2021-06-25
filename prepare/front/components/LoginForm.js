import React, { useState, useCallback } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onChangeId = useCallback(
        (e) => {
            setId(e.target.value); 
        },[]);

        
    const onChangePwd = useCallback(
        (e) => {
            setPwd(e.target.value); 
        },[]);

    const onSubmitForm = useCallback(() => {
            dispatch(loginAction({ id, pwd }));
        },[id, pwd]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} />
            </div>

            <div>
                <label htmlFor="user-id">비밀번호</label>
                <br/>
                <Input name="user-pwd" value={pwd} onChange={onChangePwd} />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;