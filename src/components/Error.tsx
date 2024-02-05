import { useNavigate, useRouteError } from "react-router";
interface ErrorType {
  data?: string;
  message?: string;
}

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorType;
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-[1.5rem]">Something went wrong</h1>
      {/* some error object kees message in data property */}
      {error?.data && <p className="text-red-500">{error?.data}</p>}
      {error?.message && <p className="text-red-500">{error?.message}</p>}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
