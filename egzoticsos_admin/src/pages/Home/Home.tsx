import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Home:React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const checkAuthUrl = process.env.REACT_APP_CHECK_AUTH_URL as string;

    useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(checkAuthUrl, { withCredentials: true });
      } catch (error) {
        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate, checkAuthUrl]);

  if (loading) {
    return (
      <div className={styles.HomeContainer}>
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  return <div className={styles.HomeContainer}>Home page</div>;
}

export default Home