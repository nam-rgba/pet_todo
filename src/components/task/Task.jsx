import style from "./task.module.css";
import { AiTwotoneDelete, AiFillCheckCircle } from 'react-icons/ai';

export default function Task() {
  return (
    <div className={style.task}>
      <button className={style.checkContainer}>
        <AiFillCheckCircle size={20}/>
      </button>
      <p className={style.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        consectetur laudantium iusto vel rem voluptatum dolorem officia ad
        quisquam nulla modi commodi provident harum, placeat suscipit! Fugiat
        cupiditate atque voluptatibus.
      </p>
      <button className={style.delete}>
        <AiTwotoneDelete size={20}/>
      </button>
    </div>
  );
}
