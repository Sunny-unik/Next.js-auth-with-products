import { useState } from "react";
import { login } from "../../../utils/api";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(data);
      localStorage.setItem("token", data.token);
      const user = jwtDecode(data.token);
      // Save user info to state/context if needed
      router.push("/");
    } catch (error) {
      setError(`Credentials must be username: emilys, password: emilyspass`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md m-auto mt-60">
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="Username"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm;
