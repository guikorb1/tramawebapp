import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegisterForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!user || !password || !repeatPassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password !== repeatPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password })
      });
      if (res.ok) {
        setSuccess('Cadastro realizado com sucesso! Redirecionando...');
        setTimeout(() => router.push('/login'), 1500);
      } else {
        const data = await res.json();
        setError(data.error || 'Erro ao cadastrar.');
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="login-form-container">
      <h1 className="login-title">Cadastro de Usuário</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user" className="login-label">Usuário</label>
        <input id="user" type="text" placeholder="Colocar usuário" className="login-input" value={user} onChange={e => setUser(e.target.value)} />

        <label htmlFor="password" className="login-label">Senha</label>
        <input id="password" type="password" placeholder="Colocar a senha" className="login-input" value={password} onChange={e => setPassword(e.target.value)} />

        <label htmlFor="repeatPassword" className="login-label">Repetir Senha</label>
        <input id="repeatPassword" type="password" placeholder="Colocar a senha" className="login-input" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />

        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        {success && <div style={{ color: 'green', marginBottom: 8 }}>{success}</div>}
        <button type="submit" className="login-button">Finalizar Cadastro</button>
        <div style={{textAlign:'right',marginTop:8}}>
          <a href="/login" className="login-register-link">Voltar para Login</a>
        </div>
      </form>
    </div>
  );
}
