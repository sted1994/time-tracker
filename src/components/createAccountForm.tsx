export const CreateAccountForm = () => {
  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
