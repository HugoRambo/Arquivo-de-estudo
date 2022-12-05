import logo from '../../img/logo.svg'
import styles from './styles.css'
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../../services/firebaseConfig"
import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  function handleSignOut(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }
  if (loading) {
    return <p>Carregando</p>
  }
  
  
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img src={logo} alt="Workflow"></img>
          <span>Faça seu cadastro</span>
        </header>
      <form>
        <div className='inputContainer'>
          <label htmlFor='email'>E-mail</label>
          <input type="text" 
          name="email" 
          id="email"
          placeholder='digite seu email.'
          onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='inputContainer'>
          <label htmlFor='password'>Password</label>
          <input type="password" 
          name="password" 
          id="password"
          placeholder='********'
          onChange={e => setPassword(e.target.value)}/>
        </div>
       
        <button onClick={handleSignOut} className='button'>
          Criar <img src="" alt="" 
          />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Register;
