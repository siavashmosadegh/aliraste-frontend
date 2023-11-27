import React from 'react';
import LoginRegisterForm from '../../Views/LoginRegisterForm/index';
import { Wrapper } from './styles';
import {useNavigate, useLocation} from "react-router-dom";

const Login = () => {

    const location = useLocation();

    console.log(localStorage.getItem("backURL"));

    return (
        <Wrapper height={window.innerHeight}>
            <div className="box">
                <h3>عالی رسته ای</h3>

                <p className="loginRegisterText">ورود | ثبت نام</p>

                <p className="description">لطفا شماره موبایل خود را وارد کنید</p>

                <LoginRegisterForm />
            </div>
        </Wrapper>
    );
}

export default Login;