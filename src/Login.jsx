import { useLogin } from "./useLogin";

export function Login() {
  const { formData, handleInputChange } = useLogin();

  return (
    <>
      <form>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Invio</button>
      </form>
    </>
  );
}
