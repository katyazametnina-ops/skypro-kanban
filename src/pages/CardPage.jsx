import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import Calendar from "../components/Calendar/Calendar";
import {
  PopBrowse,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseTitle,
  SubTitle,
  FormBrowseArea,
  StatusTheme,
  BtnBorder,
  BtnBg,
} from "./CardPage.styled.js";

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
  const { fetchTaskById, editTask, removeTask } = useContext(TaskContext);

  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        const data = await fetchTaskById(id);
        setTask(data.task);
        setFormData(data.task);
      } catch (err) {
        setError(err.message);
      }
    };
    loadTask();
  }, [id, fetchTaskById]);

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleStatusClick = (statusName) => {
    if (isEditing) setFormData({ ...formData, status: statusName });
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
      setIsSubmitting(true);
      await editTask(id, formData);
      setTask(formData);
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await removeTask(id);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!task) return null;

  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <div className="pop-browse__content">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="pop-browse__top-block">
              <PopBrowseTitle>{task.title}</PopBrowseTitle>
              <div
                className={`categories__theme theme-top ${getTopicClass(
                  formData.topic,
                )} _active-category`}
              >
                <p className={getTopicClass(formData.topic)}>
                  {formData.topic}
                </p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <SubTitle>Статус</SubTitle>
              <div className="status__themes">
                {statuses.map((statusName) => {
                  const isActive = formData.status === statusName;
                  const isHidden = !isEditing && !isActive;

                  return (
                    <StatusTheme
                      key={statusName}
                      $active={isActive}
                      $hide={isHidden}
                      $isEditing={isEditing}
                      onClick={() => handleStatusClick(statusName)}
                    >
                      <p>{statusName}</p>
                    </StatusTheme>
                  );
                })}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01">
                    <SubTitle>Описание задачи</SubTitle>
                  </label>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    value={formData.description}
                    onChange={handleDescriptionChange}
                    placeholder="Введите описание задачи..."
                  />
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
              <SubTitle>Категория</SubTitle>
              <div
                className={`categories__theme ${getTopicClass(
                  formData.topic,
                )} _active-category`}
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
                <BtnBorder disabled={isSubmitting}>
                  <a href="#" onClick={handleEdit}>
                    Редактировать задачу
                  </a>
                </BtnBorder>
                <BtnBorder disabled={isSubmitting}>
                  <a href="#" onClick={handleDelete}>
                    {isSubmitting ? "Удаление..." : "Удалить задачу"}
                  </a>
                </BtnBorder>
              </div>
              <BtnBg disabled={isSubmitting}>
                <Link to="/">Закрыть</Link>
              </BtnBg>
            </div>

            <div className={`pop-browse__btn-edit ${isEditing ? "" : "_hide"}`}>
              <div className="btn-group">
                <BtnBg disabled={isSubmitting}>
                  <a href="#" onClick={handleSave}>
                    {isSubmitting ? "Сохранение..." : "Сохранить"}
                  </a>
                </BtnBg>
                <BtnBorder disabled={isSubmitting}>
                  <a href="#" onClick={handleCancel}>
                    Отменить
                  </a>
                </BtnBorder>
                <BtnBorder id="btnDelete" disabled={isSubmitting}>
                  <a href="#" onClick={handleDelete}>
                    {isSubmitting ? "Удаление..." : "Удалить задачу"}
                  </a>
                </BtnBorder>
              </div>
              <BtnBg disabled={isSubmitting}>
                <Link to="/">Закрыть</Link>
              </BtnBg>
            </div>
          </div>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
}
