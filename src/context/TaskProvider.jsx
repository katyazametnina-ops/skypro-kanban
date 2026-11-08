import { useState, useCallback, useContext } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
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
        setError("");
        const data = await getTasks(token);
        setTasks(data.tasks);
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        if (showLoading) setIsLoading(false);
      }
    },
    [token],
  );

  const addTask = async (taskData) => {
    try {
      await createTask(token, taskData);
      toast.success("Задача успешно создана!");
      await loadTasks(false);
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  const editTask = async (id, taskData) => {
    try {
      await updateTask(token, id, taskData);
      toast.success("Изменения сохранены!");
      await loadTasks(false);
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(token, id);
      toast.info("Задача удалена");
      await loadTasks(false);
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  const fetchTaskById = async (id) => {
    try {
      return await getTaskById(token, id);
    } catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

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
