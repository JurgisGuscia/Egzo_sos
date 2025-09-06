import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Home:React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [contentDisplay, setContentDisplay] = useState("");
  const navigate = useNavigate();
  const checkAuthUrl = process.env.REACT_APP_CHECK_AUTH_URL as string;
  const logOutUrl = process.env.REACT_APP_LOGOUT_URL as string;

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

  async function handleLogOut(){
      try {
        await axios.get(logOutUrl, { withCredentials: true });
        navigate("/login", { replace: true });
      } catch (error) {
        console.log(error);  
      } 
  }

  if (loading) {
    return (
      <div className={styles.HomeContainer}>
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  return (
    <div className={styles.HomePageContainer}>
      <div className={styles.DashBoardContainer}>
        <nav className={styles.NavBarContainer}>
          <ul>
            <li onClick={() => setContentDisplay("main")}><FontAwesomeIcon icon={faHouse} />Pagrindinis</li>
            <li onClick={() => setContentDisplay("animals")}><FontAwesomeIcon icon={faPaw} />Gyvūnai</li>
            <li onClick={() => setContentDisplay("additional")}><FontAwesomeIcon icon={faGear} />Papildomi</li>
            <li className={styles.LogOutLink}
            onClick={handleLogOut}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleLogOut()}><FontAwesomeIcon icon={faArrowRightFromBracket} />Atsijungti</li>
          </ul>
        </nav>
        <div className={styles.ContentContainer}>
          {contentDisplay === "main" ? 
            <p>Main</p> : contentDisplay === "animals" ?
            <p>Animals</p> : 
            <p>Additional</p>
          }
        </div>
      </div>
    </div>
    );
}

export default Home