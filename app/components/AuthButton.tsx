"use client";

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react";

const AuthButton = () => {
    const {data: session} = useSession();
    const userInfoStyle = {
        fontSize: "16px",
        color: "#61dafb",
        marginBottom: "10px",
    };
    
    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#0070f3",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };
    
    const buttonHoverStyle = {
        backgroundColor: "#005bb5",
    };
    return (
        <div>
            {session?.user?.email ? (
            <div>
            <p style={userInfoStyle}>
              Welcome, <strong>{session.user.name || session.user.email}</strong>
            </p>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
            ) : (
            <button
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
                onClick={() => signIn("github")}
              >
                Sign in
            </button>
            )}
        </div>
    )
}

export default AuthButton