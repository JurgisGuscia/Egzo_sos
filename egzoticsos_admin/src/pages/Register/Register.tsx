import React from 'react'
import styles from "./Register.module.scss";
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
           <RegisterForm />
        </div>
    );
};

export default Register;
