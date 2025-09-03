import React, {useState} from 'react'
import styles from "./LoginForm.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoginForm:React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorState, setErrorState] = useState("");

    const loginUrl = process.env.REACT_APP_LOGIN_URL;      
    
    const resetStates = () =>{
        setLoading(false);
        setEmail("");
        setPassword("");
    }

    const handleLogin = async(e: React.FormEvent) =>{
        e.preventDefault();
        setErrorState("");
        setLoading(true);
        try{
            const response = await fetch(`${loginUrl}`, {
                method: "POST",
                headers: {"Content-Type" : "application/json" },
                body: JSON.stringify({email, password}),
            });

            if(!response.ok){
                const data = await response.json();
                setErrorState(data.Response);
                resetStates();
                return;
            }

            const data = await response.json();
            setErrorState(data.Response);

            //išsaugoti tokena sesijoje
            //redirektinti į home puslapį.

            setLoading(false);

        }catch(error){
            setErrorState("Nepavyko prisijungti. Mėginkite dar kartą.");
            resetStates();
        }
    }

  return (
    <div className={styles.LoginFormContainer}>
        <form onSubmit={handleLogin}>
            <input id="email" type="email" placeholder="Vartotojas" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <input id="password" type="password" placeholder="Slaptažodis" value={password}  onChange={(e)=>setPassword(e.target.value)} required />
            <button type="submit" id="submit" disabled ={loading}>{ loading ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : "Prisijungti"}</button>
            <p>{errorState}</p>
        </form>

    </div>
  )
}

export default LoginForm