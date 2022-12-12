import "./UserForm.css";
import { useContext } from "react";
import AppContext from "../../context";

const UserForm = (props) => {
  const [userData, setUserDate] = useContext(AppContext).userData;

  const nameChangeHandeler = (event) => {
    let currUserData = userData;
    currUserData.UserName = event.target.value;
    setUserDate(currUserData);
    // props.onUserNameChange(event.target.value);
  };
  const idChangeHandeler = (event) => {
    let currUserData = userData;
    console.log(event.target.value);
    currUserData.UserId = event.target.value;
    setUserDate(currUserData);
    // props.onUserIdChange(event.target.value);
  };

  return (
    <>
      <div className="user-form">
        <label>User name:</label>
        <input
          className="form-input"
          type="text"
          value={userData.UserName}
          onChange={nameChangeHandeler}
        />
      </div>
      <div className="user-form">
        <label>User id:</label>
        <input
          type="text"
          value={userData.UserId}
          onChange={idChangeHandeler}
          className="form-input"
        />
      </div>
      <div className="user-form">
        <label>User e-mail:</label>
        <input
          className="form-input"
          type="text"
          value={userData.UserEmail}
          onChange={nameChangeHandeler}
        />
      </div>
    </>
  );
};

export default UserForm;
