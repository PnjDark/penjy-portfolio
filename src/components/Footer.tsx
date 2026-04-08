export default function Footer() {
  return (
    <footer style={{
      padding: "2rem",
      textAlign: "center",
      background: "var(--muted)",
      borderTop: "1px solid var(--border)",
      marginTop: "3rem"
    }}>
      <p style={{
        color: "var(--foreground)",
        opacity: 0.7,
        fontSize: "0.875rem"
      }}>
        © {new Date().getFullYear()} Penjy's Portfolio. Built with Next.js and React.
      </p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1rem"
      }}>
        <a 
          href="https://github.com" 
          style={{ color: "var(--primary)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com" 
          style={{ color: "var(--primary)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://twitter.com" 
          style={{ color: "var(--primary)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}