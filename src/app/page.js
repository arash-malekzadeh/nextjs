"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();

  const haandle = () => {
    Router.push("products");
  };
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>welcome to Nextjs course</h1>
      <Link href={"/products"}> go to poducts page</Link>
      <Link href={"/accounts"}> go to accounts page</Link>

      <h2>using useroute to navigate</h2>

      <button className="text-blue-900" onClick={haandle}>
        {" "}
        go to products
      </button>
    </main>
  );
}
