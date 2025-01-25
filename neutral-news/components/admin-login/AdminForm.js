'use client'

import Buttons from "./Buttons";
import { useActionState } from "react";
import { serverAction } from "@/app/(auth)/admin-login/server-action";

function AdminForm() {

  const [state, formAction] = useActionState(serverAction, { message: null });

  return (
    <>
      <form
        action={formAction}
        className="text-center border-[1px] p-10 m-auto w-2/5 rounded-lg transform -translate-y-14"
      >
        <h1 className="text-5xl font-bold mb-5">Admin Login</h1>
        <main className="flex flex-col gap-4">
          <section className="flex flex-row justify-center gap-4">
            <label htmlFor="email" className="text-2xl">
              Email
            </label>
            <input
              className="h-6 text-black text-center text-[1.2rem] rounded-lg"
              type="text"
              name="email"
              id="email"
            ></input>
          </section>
          <section className="flex flex-row justify-center gap-4">
            <label htmlFor="password" className="text-2xl">
              Password
            </label>
            <input
              className="h-6 text-black text-center text-[1.2rem] rounded-lg"
              type="password"
              name="password"
              id="password"
            ></input>
          </section>
        </main>
        <Buttons></Buttons>
      </form>
    </>
  );
}

export default AdminForm;
