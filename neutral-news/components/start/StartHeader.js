import Link from "next/link";

function StartHeader() {
  return (
    <>
      <nav className="flex flex-row gap-10 justify-center w-10/12 m-auto text-4xl p-2 h-[20%] items-center">
        <section className="border-[1px] text-center w-1/2 rounded-lg">
          <Link href={"/home"}>Home</Link>
        </section>
        <section className="border-[1px] text-center w-1/2 rounded-lg">
          <Link href={"/admin-login"}>Admin-Login</Link>
        </section>
      </nav>
    </>
  );
}

export default StartHeader;
