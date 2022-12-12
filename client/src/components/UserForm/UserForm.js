import "./UserForm.css";

const UserForm = ({
  userName,
  setUserName,
  userTz,
  setUserTz,
  userEmail,
  setUserEmail,
}) => {
  const setName = (event) => {
    setUserName(event.target.value);
  };

  const setTz = (event) => {
    setUserTz(event.target.value);
  };

  const setMail = (event) => {
    setUserEmail(event.target.value);
  };

  return (
    <>
      <div className="user-form">
        <label>User name:</label>
        <input
          className="form-input"
          type="text"
          value={userName}
          onChange={setName}
        />
      </div>
      <div className="user-form">
        <label>User tz:</label>
        <input
          type="text"
          value={userTz}
          onChange={setTz}
          className="form-input"
        />
      </div>
      <div className="user-form">
        <label>User e-mail:</label>
        <input
          className="form-input"
          type="text"
          value={userEmail}
          onChange={setMail}
        />
      </div>
    </>
  );
};

export default UserForm;
