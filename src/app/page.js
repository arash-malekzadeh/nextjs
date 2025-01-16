import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>welcome to Nextjs course</h1>
      <Link href={"/products"}> go to poducts page</Link>
      <Link href={"/accounts"}> go to accounts page</Link>
    </main>
  );
}
