import { useState, useEffect, useRef } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useOutletContext,
} from "react-router-dom";
import { getTaskById, updateTask, deleteTask } from "../services/tasks";
import Calendar from "../components/Calendar/Calendar";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const getTopicClass = (topic) => {
  if (topic === "Web Design") return "_orange";
  if (topic === "Research") return "_green";
  if (topic === "Copywriting") return "_purple";
  return "_orange";
};

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loadTasks } = useOutletContext();
  const token = localStorage.getItem("token");

  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const hasFetched = useRef(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const loadTask = async () => {
      try {
        const data = await getTaskById(token, id);
        setTask(data.task);
        setFormData(data.task);
      } catch (err) {
        setError(err.message);
      }
    };
    loadTask();
  }, [id, token]);

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleStatusClick = (statusName) => {
    if (isEditing) {
      setFormData({ ...formData, status: statusName });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormData(task);
    setIsEditing(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateTask(token, id, formData);
      setTask(formData);
      setIsEditing(false);
      await loadTasks(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteTask(token, id);
      await loadTasks(false);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (!task) {
    return null;
  }

  return (
    <div className="pop-browse" id="popBrowse" style={{ display: "block" }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <div
                className={`categories__theme theme-top ${getTopicClass(formData.topic)} _active-category`}
              >
                <p className={getTopicClass(formData.topic)}>
                  {formData.topic}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((statusName) => (
                  <div
                    key={statusName}
                    className={`status__theme ${
                      isEditing
                        ? formData.status === statusName
                          ? "_gray"
                          : ""
                        : formData.status === statusName
                          ? "_gray"
                          : "_hide"
                    }`}
                    onClick={() => handleStatusClick(statusName)}
                    style={{ cursor: isEditing ? "pointer" : "default" }}
                  >
                    <p
                      className={formData.status === statusName ? "_gray" : ""}
                    >
                      {statusName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    value={formData.description}
                    onChange={handleDescriptionChange}
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar
                selectedDate={formData.date}
                onSelectDate={(date) =>
                  setFormData({ ...formData, date: date.toISOString() })
                }
                readOnly={!isEditing}
              />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div
                className={`categories__theme ${getTopicClass(formData.topic)} _active-category`}
              >
                <p className={getTopicClass(formData.topic)}>
                  {formData.topic}
                </p>
              </div>
            </div>

            <div
              className={`pop-browse__btn-browse ${isEditing ? "_hide" : ""}`}
            >
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#" onClick={handleEdit}>
                    Редактировать задачу
                  </a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#" onClick={handleDelete}>
                    Удалить задачу
                  </a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>

            <div className={`pop-browse__btn-edit ${isEditing ? "" : "_hide"}`}>
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#" onClick={handleSave}>
                    Сохранить
                  </a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#" onClick={handleCancel}>
                    Отменить
                  </a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#" onClick={handleDelete}>
                    Удалить задачу
                  </a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
