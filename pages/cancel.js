
export default function CancelPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '2rem', color: 'red' }}>❌ Payment Cancelled</h1>
      <p style={{ marginTop: '20px' }}>Your transaction was not completed. You can try again at any time.</p>
      <a href="/" style={{ marginTop: '30px', display: 'inline-block', textDecoration: 'underline', color: 'blue' }}>
        Return to Home
      </a>
    </div>
  );
}
