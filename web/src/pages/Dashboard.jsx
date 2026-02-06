import { useAccount, useDisconnect } from "wagmi";

function App() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div style={{ padding: 40 }}>
      <h2>Jumper Style Wallet</h2>

      {isConnected ? (
        <>
          <p>Connected:</p>
          <b>{address}</b>
          <br /><br />
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <w3m-button />
      )}
    </div>
  );
}

export default App;
