import LinkButton from "./ui/LinkButton";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center  bg-[url(src/assets/pizza.jpg)] bg-center bg-no-repeat pt-[3rem] text-center ">
      <div className=" grid gap-[2rem] rounded-lg bg-zinc-400/30 p-[4rem] text-zinc-800 shadow-xl shadow-orange-200/40 ">
        <h1 className=" text-[4rem]  ">React Pizza is the best!!!</h1>
        <h2 className=" text-[2rem]">
          Straight out of react oven to your door
        </h2>
        <div className="flex justify-center gap-4">
          <LinkButton route="/menu" btnText="Pick your pizza" />
          <LinkButton route="/order/new" btnText="Place your order" />
        </div>
      </div>
    </div>
  );
}
