
export default function SuccessPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '2rem', color: 'green' }}>✅ Payment Successful!</h1>
      <p style={{ marginTop: '20px' }}>Thank you for your order. A confirmation email has been sent to you.</p>
      <a href="/" style={{ marginTop: '30px', display: 'inline-block', textDecoration: 'underline', color: 'blue' }}>
        Return to Home
      </a>
    </div>
  );
}
