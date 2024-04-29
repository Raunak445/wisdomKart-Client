import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const ref = searchQuery.get("reference");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "green" }}>
        ORDER SUCCESSFUL
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
        Reference Number: {ref}
      </div>
    </div>
  );
};

export default PaymentSuccess;
