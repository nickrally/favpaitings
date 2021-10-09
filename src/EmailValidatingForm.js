import useEmailValidation from "./useEmailValidation";

function EmailValidatingForm() {
  const maxCount = 30;
  const { email, setEmail, count, setCount, emailValid } =
    useEmailValidation(maxCount);

  return (
    <div className="container">
      <br />
      <div>
        <div className="content">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={count <= 0}
            value={email}
            placeholder="Enter email"
            type="email"
            name="email"
            required
          />
          &nbsp;&nbsp;&nbsp;
          <button
            disabled={!emailValid || count <= 0}
            onClick={() => {
              setCount(0);
              alert(`button clicked with email ${email}`);
            }}
            className="btn-lg"
            type="submit"
          >
            PRESS
          </button>
        </div>
        {count > 0
          ? `You have ${count} seconds to enter email`
          : "email entered or time expired"}
      </div>
    </div>
  );
}
export default EmailValidatingForm;
