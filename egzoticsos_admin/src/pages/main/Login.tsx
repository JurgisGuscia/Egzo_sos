import React from 'react'
import styles from "./Login.module.scss";
import LoginForm from '../../components/LoginForm/LoginForm';

const Login: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
           <LoginForm />
        </div>
    );
};

export default Login;
