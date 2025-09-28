"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthCard from '../components/AuthCard';

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); 
    
    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/account");    
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <AuthCard title="Welcome!" toggleText="Already have an account?" toggleHref="/login">
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className = "block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}   
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0f2b3c] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className = "block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0f2b3c] focus:outline-none"
                        />  
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#0f2b3c] text-white font-semibold py-2 rounded-md hover:bg-[#123c54] transition"
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
            </AuthCard>
            <Footer />
        </>
    );
}