import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!user || !password) {
      setError('Preencha todos os campos.');
      return;
    }
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password })
      });
      if (res.ok) {
        localStorage.setItem('user', user);
        router.push('/membrosFamilia');
      } else {
        const data = await res.json();
        setError(data.error || 'Usuário ou senha inválidos.');
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="login-form-container">
      <div style={{display:'flex',justifyContent:'center',marginBottom:12}}>
        <Image src="/logo_trama.png" alt="Logo" width={72} height={72} />
      </div>
      <h1 className="login-title">Bem Vindo!</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user" className="login-label">Usuário</label>
        <input id="user" type="text" placeholder="Colocar usuário" className="login-input" value={user} onChange={e => setUser(e.target.value)} />

        <label htmlFor="password" className="login-label">Senha</label>
        <div className="login-password-wrapper" style={{position:'relative'}}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Colocar a senha"
            className="login-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{paddingRight: '36px'}}
          />
          <span
            onClick={() => setShowPassword(s => !s)}
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              height: '22px',
              width: '22px',
              justifyContent: 'center'
            }}
            title={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            <img
              src={showPassword ? '/eye-off.svg' : '/eye.svg'}
              alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              style={{ width: 22, height: 22, opacity: 0.7, display: 'block' }}
            />
          </span>
        </div>

        <div className="login-remember">
          <input id="remember" type="checkbox" defaultChecked />
          <label htmlFor="remember">Lembrar-me</label>
          <span className="login-forgot">Esqueceu a senha?</span>
        </div>

        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <div className="login-register">
        <span>Você não tem uma conta?</span>
        <a href="#" className="login-register-link">Registre-se</a>
      </div>
    </div>
  );
}
