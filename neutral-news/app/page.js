import Link from "next/link";

function StartPage() {
  return (
    <>
      <div className="p-2 h-screen">
        <h1 className="text-6xl text-center"></h1>
        <nav className="flex flex-row gap-10 justify-center w-10/12 m-auto text-4xl p-2 h-[20%] items-center">
          <section className="border-[1px] text-center w-1/2 rounded-lg">
            <Link href={"/home"}>Home</Link>
          </section>
          <section className="border-[1px] text-center w-1/2 rounded-lg">
            <Link href={"/login"}>Admin-Login</Link>
          </section>
        </nav>
        <main className="border-[1px] w-10/12 m-auto h-[70%] rounded-lg p-2 bg-start-page-image bg-cover bg-center">
          <h1 className="text-5xl text-center font-bold">P-News</h1>
          <div className="flex flex-row w-full h-4/5 items-center">
            <div className="w-1/2"></div>
            <div className="w-1/2 text-2xl text-center">
            <div className="mb-4 text-3xl">Application to view news from an objective perspective and add personal opinions</div>
            <div className="text-2xl">Tel : 010-8489-3121</div>
            <div className="text-2xl">Email : dnjsxoghd@naver.com</div>
            </div>
            
          </div>
        </main>
      </div>
    </>
  );
}

export default StartPage;
