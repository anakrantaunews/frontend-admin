import React, { useState } from "react";
import Footer from "../component/Footer";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      alert("login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <header className="flex flex-col gap-5 mt-10">
        <h1 className="text-3xl text-center font-bold">Logi</h1>
        <h1 className="text-2xl text-center font-semibold">
          {" "}
          ANAKRANTAUNews <br />
          Admin Dashboard
        </h1>
      </header>
      <main className="px-8 md:px-48 lg:px-80 py-6 mt-20">
        <section>
          <form onSubmit={handleLogin} className="flex flex-col gap-10 border shadow-xl border-black rounded-xl px-8 py-6">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Email : </label>
              <input
                onChange={onChangeHandler}
                value={form.email}
                name="email"
                className=" outline-none text-sm border border-gray-500 px-3 py-2 rounded-xl"
                type="email"
                required
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Password : </label>
              <input
                onChange={onChangeHandler}
                value={form.password}
                name="password"
                className=" outline-none text-sm border border-gray-500 px-3 py-2 rounded-xl"
                type="password"
                required
                placeholder="*********"
              />
            </div>
            <button type="submit" className="text-sm bg-green-500 hover:bg-green-700 text-white py-2 px-3 rounded-xl">
              Login
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
