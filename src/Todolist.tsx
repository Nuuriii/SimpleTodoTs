import { useState } from "react";

export const Todolist = () => {
   return (
      <div className='main-container'>
         <h1>My Todo</h1>
         <ul>
            <li>Learning</li>
            <li>React</li>
         </ul>
         <input type='text' placeholder='add Your task!!!' />
         <button>Add</button>
      </div>
   );
};
