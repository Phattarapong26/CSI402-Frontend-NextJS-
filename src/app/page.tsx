'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from './component/InputField';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === 'demo@example.com' && password === 'password123') {
      alert('Login Successful!');
      router.push('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={setEmail}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <button
              onClick={() => router.push('/register')}
              className="text-blue-600 hover:text-blue-800 px-4 py-2 rounded-md border border-blue-600 hover:border-blue-800"
            >
              Register
            </button>
            <button
              onClick={() => router.push('/')}
              className="text-gray-600 hover:text-gray-800 px-4 py-2"
            >
              Forget Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}