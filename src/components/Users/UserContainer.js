import styles from "./UserContainer.module.css";
import UserInput from "./UserInput";

const UserContainer = (props) => {
  return (
    <div className={`${styles.userContainer} ${props.className}`}>
      <UserInput onAddUser={props.onAddUser} />
    </div>
  );
};

export default UserContainer;
