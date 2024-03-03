import style from "./task.module.css";
import { AiTwotoneDelete, AiFillCheckCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Task({ task, onCompleted, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  return (
    <div className={style.task}>
      <button
        className={style.checkContainer}
        onClick={() => {
          setIsCompleted(!isCompleted);
          onCompleted(task.id);
        }}
      >
        {isCompleted ? (
          <AiFillCheckCircle size={20} />
        ) : (
          <div className={style.check} />
        )}
      </button>
      <div className={style.content}>
        <p className={isCompleted ? style.textCompleted : style.title}>
          {task.title}
        </p>

        <div className={style.createAt}>Was created: {task.created}</div>

        {task.deadline.length > 0 && !isCompleted ? (
          <p className={style.deadline}>
            {" "}
            Deadline: {task.deadline[0]} {task.deadline[1]}
          </p>
        ) : null}
      </div>

      <button
        className={style.delete}
        onClick={() => {
          onDelete(task.id);
        }}
      >
        <AiTwotoneDelete size={20} />
      </button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  onCompleted: PropTypes.func,
  onDelete: PropTypes.func,
};
