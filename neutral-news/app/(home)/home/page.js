function HomePage() {
  return (
    <>
      <h1 className="text-center">Hello-world</h1>
      <main className="flex flex-row gap-10 justify-center text-center text-2xl">
        <article className="border-[1px] w-1/3 p-2">
          <h2>Latest News</h2>
          <p></p>
        </article>
        <article className="border-[1px] w-1/3 p-2">
          <h2>Highlight News</h2>
          <p></p>
        </article>
      </main>
    </>
  );
}

export default HomePage;
