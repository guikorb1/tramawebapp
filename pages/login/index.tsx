import React from 'react';
import LoginForm from '../../components/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-left">
        <Image src="/logo_trama.png" alt="Logo Trama" width={500} height={500} />
      </div>
      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  );
}
