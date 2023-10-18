export function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();

    // const username = event.target.elements.namedItem("username").value
    // const password = event.target.elements.namedItem("password").value
    // const remember = event.target.elements.namedItem("remember").checked

    const username = event.target.username.value;
    const password = event.target.password.value;
    const remember = event.target.remember.checked;

    const data = {
      username,
      password,
      remember,
    };

    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
}
