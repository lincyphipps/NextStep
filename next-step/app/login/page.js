"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthCard from '../components/AuthCard';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/account");    
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
        // try {
        //     if (isLogin) {
        //         // Login
        //         await signInWithEmailAndPassword(auth, email, password);
        //         alert("Logged in successfully!");
        //     } else {
        //         // Sign Up
        //         await createUserWithEmailAndPassword(auth, email, password);
        //         alert("Account created successfully!");
        //     }
        // } catch (error) {
        //     alert(error.message);
        // }
    };

    return (
        <>
            <Header />
            <AuthCard title="Welcome Back!" toggleText="Don't have an account?" toggleHref="/signup">
                <form onSubmit={handleLogin} className="space-y-4">
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
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </AuthCard>
            <Footer />
        </>


        // <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem"}}>
        //     <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        //     <form onSubmit={handleSubmit}>
        //     <input
        //         type="email"
        //         placeholder="Email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //         required
        //         />
        //         <br />
        //         <input
        //             type="password"
        //             placeholder="Password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             required
        //         />
        //         <br />
        //         <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        //     </form>
        //     <p 
        //         onClick={() => setIsLogin(!isLogin)} 
        //         style={{cursor:"pointer", color:"blue"}}
        //     >
        //         {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        //     </p>
        // </div>
    );
}