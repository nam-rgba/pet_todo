import logo from "../../assets/logo.svg";
import style from "./header.module.css";


export default function Header() {
  return (
    <>
      <header className={style.header}>
        <img src={logo} alt="logo"/>

        <form action="post" className={style.form}>
            <div className={style.formgroup}>
                <input type="text" name="task" placeholder="Add a new task..." />
                <button type="submit" className={style.submit_btn}>Add
                <i className="fa-solid fa-calendar-plus"></i>
                </button>
            </div>
        </form>
      </header>
    </>
  );
}
