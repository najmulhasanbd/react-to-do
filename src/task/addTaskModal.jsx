import React, { useState, useEffect } from "react";

const AddTaskModal = ({ taskToUpdate, onSave, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "",
    isFavorite: false,
  });

  useEffect(() => {
    if (taskToUpdate) {
      setTask(taskToUpdate);
    }
  }, [taskToUpdate]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setTask(prev => ({
      ...prev,
      [name]: name === "tags" ? value.split(",") : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(task, !taskToUpdate);
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed top-1/4 left-1/3 bg-[#191D26] p-9 rounded-xl"
    >
      <h2 className="text-white text-center text-2xl font-bold">Add New Task</h2>

      <div className="text-white space-y-4 mt-6">
        <input className="w-full p-2 rounded bg-[#2D323F]" type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
        <textarea className="w-full p-2 rounded bg-[#2D323F]" name="description" placeholder="Description" value={task.description} onChange={handleChange} required></textarea>
        <input className="w-full p-2 rounded bg-[#2D323F]" type="text" name="tags" placeholder="Tags (comma separated)" value={task.tags} onChange={handleChange} required />
        <select className="w-full p-2 rounded bg-[#2D323F]" name="priority" value={task.priority} onChange={handleChange} required>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="mt-4 flex justify-between">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" className="bg-gray-600 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default AddTaskModal;
