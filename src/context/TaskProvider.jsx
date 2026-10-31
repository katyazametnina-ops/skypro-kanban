import { useState, useCallback, useContext } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} from "../services/tasks";

export const TaskProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTasks = useCallback(
    async (showLoading = true) => {
      try {
        if (showLoading) setIsLoading(true);
        const data = await getTasks(token);
        setTasks(data.tasks);
      } catch (err) {
        setError(err.message);
      } finally {
        if (showLoading) setIsLoading(false);
      }
    },
    [token],
  );

  const addTask = async (taskData) => {
    await createTask(token, taskData);
    await loadTasks(false);
  };

  const editTask = async (id, taskData) => {
    await updateTask(token, id, taskData);
    await loadTasks(false);
  };

  const removeTask = async (id) => {
    await deleteTask(token, id);
    await loadTasks(false);
  };

  const fetchTaskById = (id) => getTaskById(token, id);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isLoading,
        error,
        loadTasks,
        addTask,
        editTask,
        removeTask,
        fetchTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
