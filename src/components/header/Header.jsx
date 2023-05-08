import { useState } from "react";
import logo from "../../assets/logo.svg";
import style from "./header.module.css";
import PropTypes from "prop-types";

export default function Header(props) {
  const [title, setTitle] = useState("");

  const { onAddTask } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  const inputTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <header className={style.header}>
        <img src={logo} alt="logo" />

        <form onSubmit={handleSubmit} action="post" className={style.form}>
          <div className={style.formgroup}>
            <input
              type="text"
              name="task"
              placeholder="Add a new task..."
              value={title}
              onChange={inputTitleChange}
            />
            <button type="submit" className={style.submit_btn}>
              Add
              <i className="fa-solid fa-calendar-plus"></i>
            </button>
          </div>
        </form>
      </header>
    </>
  );
}

Header.propTypes = {
  onAddTask: PropTypes.func,
};
