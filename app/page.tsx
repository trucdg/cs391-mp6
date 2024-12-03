import Link from "next/link";
import AuthButton from "./components/AuthButton";

export default function Home() {
  const containerStyle = {
    padding: "20px",
    color: "#f0f0f0",
    backgroundColor: "#121212",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "#61dafb",
    textDecoration: "none",
    fontSize: "18px",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>CS391 MP-6 OAuth Application</p>
      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/" style={linkStyle}>
          About
        </Link>
      </nav>
      <AuthButton />
    </div>
  );
}
