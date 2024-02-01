import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchOrder() {
  const [orderId, setOrderId] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchById = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/order/${orderId}`);
    setOrderId("");
  };
  return (
    <div>
      <form onSubmit={handleSearchById}>
        <input
          placeholder="Please input the order Id"
          type="text"
          name="orderId"
          id="orderId"
          value={orderId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOrderId(e.target.value)
          }
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
