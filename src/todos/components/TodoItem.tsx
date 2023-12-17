import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";

interface Props {
    todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
    return (
        <div className={todo.complete ? styles.todoDone : styles.todoPending}>
            {todo.description}
        </div>
    );
};
