import { useState } from "react";
import { useNavigate } from "react-router";
import SearchIcon from "../ui/icons/SearchIcon";

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
        <div className=" flex flex-nowrap items-center rounded-md bg-orange-200 p-1 ">
          <input
            className="me-1 rounded-md bg-orange-200 p-1 text-zinc-900 ring-orange-400 focus:outline-none focus:ring-1"
            placeholder="Search your order by Id#"
            required
            type="text"
            name="orderId"
            id="orderId"
            value={orderId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOrderId(e.target.value)
            }
          />
          <button type="submit">
            <SearchIcon />{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
