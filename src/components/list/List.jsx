import style from "./list.module.css";
import Task from "../task/Task";
import PropTypes from "prop-types";

export default function List({ tasks, onCompleted, onDelete }) {
  console.log(tasks);
  return (
    <>
      <section className={style.task}>
        <header className={style.header}>
          <div className={style.created}>
            Created tasks
            <span>{tasks.length}</span>
          </div>
          <div className={style.completed}>
            Completed
            <span>
              {" "}
              {tasks.filter((task) => task.isCompleted).length} of{" "}
              {tasks.length}
            </span>
          </div>
        </header>
        <div className={style.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCompleted={onCompleted}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
    </>
  );
}

List.propTypes = {
  tasks: PropTypes.array,
  onCompleted: PropTypes.func,
  onDelete: PropTypes.func,
};
