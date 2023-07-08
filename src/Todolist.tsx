import { useState } from "react";

interface Item {
   id: number;
   text: string;
   completed: boolean;
}

export const Todolist: React.FC = () => {
   const handleToggle = (id: number) => {
      setTodos(
         todos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, completed: !todo.completed };
            }
            return todo;
         })
      );
   };

   const [todos, setTodos] = useState<Item[]>([
      { id: 1, text: "Learning JS", completed: false },
   ]);
   return (
      <div className='main-container'>
         <h1>My Todo</h1>
         <ul>
            {todos.map((todo) => {
               <li key={todo.id} onClick={() => handleToggle(todo.id)}>
                  {todo.text}
               </li>;
            })}
         </ul>
         <input type='text' placeholder='add Your task!!!' />
         <button>Add</button>
      </div>
   );
};
