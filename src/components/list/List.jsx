import style from "./list.module.css";
import Task from "../task/Task";

export default function List() {
  return (
    <>
      <section className={style.task}>
        <header className={style.header}>
          <div className={style.created}>
            Created tasks
            <span>5</span>
          </div>
          <div className={style.completed}>
            Completed
            <span>1 of 5</span>
          </div>
        </header>
        <div className={style.list}>
          <Task/>
        </div>
      </section>
    </>
  );
}
