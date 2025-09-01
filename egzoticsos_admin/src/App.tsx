import React from 'react';
import styles from './App.module.scss';
import Login from './pages/main/Login';

const App:React.FC = () => {
  return (
    <div className={styles.App}>
      <Login />
    </div>
  );
}

export default App;
