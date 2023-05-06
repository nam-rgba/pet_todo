import style from "./task.module.css";

export default function Task() {
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
        
      </section>
    </>
  );
}
