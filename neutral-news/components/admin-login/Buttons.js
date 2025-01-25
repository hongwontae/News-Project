function Buttons() {
  return (
    <>
      <div className="flex flex-row justify-end gap-4 mt-4">
        <button
          type="button"
          className="border-[1px] p-2 rounded-lg text-[1.2rem]"
        >
          Clear
        </button>
        <button
          type="submit"
          className="border-[1px] p-2 rounded-lg text-[1.2rem]"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Buttons;
