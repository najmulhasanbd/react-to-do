import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="overflow-auto">
      <table className="table-fixed xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold w-[300px]">Title</th>
            <th className="p-4 pb-8 text-sm font-semibold">Description</th>
            <th className="p-4 pb-8 text-sm font-semibold md:w-[350px]">Tags</th>
            <th className="p-4 pb-8 text-sm font-semibold md:w-[100px]">Priority</th>
            <th className="p-4 pb-8 text-sm font-semibold md:w-[100px]">Options</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="border-b border-[#2E3443]">
              <td>{task.isFavorite ? <FaStar color="yellow" /> : <FaRegStar color="green" />}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag, index) => (
                    <li key={index}>
                      <span className="inline-block bg-blue-500 px-2.5 text-sm text-white">{tag}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex justify-center space-x-3">
                  <button className="text-red-500" onClick={() => onDelete(task.id)}>Delete</button>
                  <button className="text-blue-500" onClick={() => onEdit(task)}>Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
