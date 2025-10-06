import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="login-page-container">
      <div className="login-left">
        <Image src="/logo_trama.png" alt="Logo Trama" width={300} height={300} />
      </div>
      <div className="login-right">
        <RegisterForm />
      </div>
    </div>
  );
}
