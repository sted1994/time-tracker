export const CreateAccountForm = () => {
  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <label>
          Name
          <input type="name" />
        </label>
        <label>
          Location
          <input type="location" />
        </label>
        <label>
          Skills you would like to learn
          <select />
        </label>
        <label>
          Skills you would like to teach
          <select />
        </label>
        <label>
          About
          <input type="summary" />
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
