import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    // axios.get("/test");
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Success! Now you can Login");
    } catch (e) {
      alert("Email already exists");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">REGISTER</h1>
        {/* prettier-ignore */}
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text" placeholder="John Doe" value={name} onChange={ev=> setName(ev.target.value)}/>
          <input type="email" placeholder="your@email.com" value={email} onChange={ev=> setEmail(ev.target.value)}/>
          <input type="password" placeholder="password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
          <button className="primary">REGISTER</button>
          <div className="text-gray-400 text-center py-2 ">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
