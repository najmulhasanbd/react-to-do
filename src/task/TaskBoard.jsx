import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./addTaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.id,
    title: "title",
    description: "description",
    tags: ["web", "api"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const[showAddModal, setShowAddModal]=useState(false);

  function handleAddTask() {
    alert("add task");
  }
  return (
    <section className="mb-20" id="tasks">
        {showAddModal && <AddTaskModal />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={()=>setShowAddModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
