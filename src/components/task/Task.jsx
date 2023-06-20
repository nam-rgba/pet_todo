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
        {isCompleted ? <AiFillCheckCircle size={20} /> : <div />}
      </button>
      <p className={isCompleted ? style.textCompleted : style.title}>
        {task.title}
      </p>
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
