'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '../component/InputField';

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // Reset error message

        // Check if all fields are filled
        if (!email || !password || !confirmPassword) {
            setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('รหัสผ่านไม่ตรงกัน');
            return;
        }

        // Log registration details
        console.log('Register:', { email, password, confirmPassword });
        alert('การใช้งานชั่วคราวจะสามารถใช้งานได้ภายในเวลา 30 นาที');
        router.push('/home');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Register
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
                    <InputField
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-4">
                    <button
                        onClick={() => router.push('/')}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Login here
                    </button>
                </div>
            </div>
        </div>
    );
}