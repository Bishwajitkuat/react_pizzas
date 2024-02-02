import { Link } from "react-router-dom";

function LinkButton({ route, btnText }: { route: string; btnText: string }) {
  return (
    <Link
      className="rounded-xl bg-gradient-to-br from-orange-500 to-zinc-300 px-[2rem] py-[1.2rem] text-[1.3rem] font-bold uppercase tracking-widest shadow-md shadow-zinc-100/50 hover:text-orange-800 hover:shadow-xl hover:shadow-orange-600/50"
      to={route}
    >
      {btnText}
    </Link>
  );
}

export default LinkButton;
