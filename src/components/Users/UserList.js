import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.userList}>
      <ul>
        {props.users.map((user) => (
          <li className={styles.listItem} key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
