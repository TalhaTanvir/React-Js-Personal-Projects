import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

function Success() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Order Sucessful!</h2>
          <p>Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
}

export default Success;
