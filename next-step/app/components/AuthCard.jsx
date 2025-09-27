import Link from "next/link";

export default function AuthCard({ title, toggleText, toggleHref, children }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f1dc] px-4">
            
            {/* Page Title */}
            <h1 className="text-4x1 font-serif mb-8">{title}</h1>
           
            {/* Card */}
            <div className="w-full max-w-md bg-[#f9f1dc] border-4 border-[#d9c6a4] rounded-2x1 p-8 shadow-md">
                {children}

                {/* Toggle Link */}
                <p className="mt-4 text-center text-sm">
                    {toggleText}{" "}
                    <Link href={toggleHref} className="text-[#0f2b3c] hover:underline">
                        {toggleHref === "/login" ? "Login" : "Sign Up"}
                    </Link>
                </p>
            </div>
        </div>
        );
}
