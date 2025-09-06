import React, {useState} from 'react'
import styles from "./RegisterForm.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const RegisterForm:React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorState, setErrorState] = useState("");

    const registerUrl = process.env.REACT_APP_REGISTER_URL as string;      
    
    const resetStates = () =>{
        setLoading(false);
        setEmail("");
        setPassword("");
        setPassword2("");
    }

    const handleRegister = async(e: React.FormEvent) =>{
        e.preventDefault();
        setErrorState("");
        setLoading(true);

        const userData = {
            "email" : email,
            "password" : password
        }
        try{
            const response = await axios.post(registerUrl, userData,{
                headers: {"Content-Type" : "application/json"},
                withCredentials: true
            });

            if(response.data.Response === "Vartotojas užregistruotas."){
                resetStates();
                setErrorState("Registracija sėkminga.");
            }else{
                setLoading(false);
                setErrorState(response.data.Response);
            }
             
        }catch(error){
            if (axios.isAxiosError(error)) {
                setErrorState(error.response?.data?.Response);
            } else {
                setErrorState("Registracija nesėkminga. Mėginkite dar kartą.");
            }
            resetStates();
        }


        
    }

  return (
    <div className={styles.RegisterFormContainer}>
        <form onSubmit={handleRegister}>
            <input id="email" type="email" placeholder="Vartotojas" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <input id="password" type="password" placeholder="Slaptažodis" value={password}  onChange={(e)=>setPassword(e.target.value)} required />
            <input id="password2" type="password" placeholder="Pakartoti slaptažodį " value={password2}  onChange={(e)=>setPassword2(e.target.value)} required />
            <button type="submit" id="submit" disabled ={loading}>{ loading ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : "Registruotis"}</button>
            <p>{errorState}</p>
        </form>

    </div>
  )
}

export default RegisterForm