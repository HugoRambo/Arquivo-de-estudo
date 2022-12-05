import logo from '../../img/logo.svg'
import styles from './styles.css'
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../../services/firebaseConfig"
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error] = useSignInWithEmailAndPassword(auth);
  
  function handleSignIn(e) {
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
  }
  if (loading) {
    return <p>Carregando</p>
  }
  if(user){
    return console.log(user)
  }
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img src={logo} alt="Workflow"></img>
          <span>Faça Login</span>
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
          onChange={e =>setPassword(e.target.value) }/>
        </div>
        <a href=''>Esqueceu sua senha</a>
        <button className='button' onClick={handleSignIn}>
          Entrar <img src="" alt="" />
        </button>
        <div className="footer">
          <p>Caso não tenha uma conta </p>
          <Link to="/register"> Crie sua conta aqui.</Link>
        </div>
      </form>
      </div>
    </div>
  );
}
export default Login


