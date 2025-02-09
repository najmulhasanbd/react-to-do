import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Sample Task",
    description: "This is a sample task description",
    tags: ["web", "api"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, { id: crypto.randomUUID(), ...newTask }]);
    } else {
      setTasks(tasks.map(task => (task.id === newTask.id ? newTask : task)));
    }
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          onSave={handleAddTask}
          onClose={() => setShowAddModal(false)}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
