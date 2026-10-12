import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createTask } from "../services/tasks";

export default function NewCardPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(token, formData);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard" style={{ display: "block" }}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form
              className="pop-new-card__form form-new"
              onSubmit={handleSubmit}
            >
              <div className="form-new__block">
                <label htmlFor="formTitle" className="subttl">
                  Название задачи
                </label>
                <input
                  className="form-new__input"
                  type="text"
                  name="title"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-new__block">
                <label htmlFor="textArea" className="subttl">
                  Описание задачи
                </label>
                <textarea
                  className="form-new__area"
                  name="description"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div
                    className={`categories__theme _orange ${formData.topic === "Web Design" ? "_active-category" : ""}`}
                    onClick={() =>
                      setFormData({ ...formData, topic: "Web Design" })
                    }
                  >
                    <p className="_orange">Web Design</p>
                  </div>
                  <div
                    className={`categories__theme _green ${formData.topic === "Research" ? "_active-category" : ""}`}
                    onClick={() =>
                      setFormData({ ...formData, topic: "Research" })
                    }
                  >
                    <p className="_green">Research</p>
                  </div>
                  <div
                    className={`categories__theme _purple ${formData.topic === "Copywriting" ? "_active-category" : ""}`}
                    onClick={() =>
                      setFormData({ ...formData, topic: "Copywriting" })
                    }
                  >
                    <p className="_purple">Copywriting</p>
                  </div>
                </div>
              </div>

              <button className="form-new__create _hover01" type="submit">
                Создать задачу
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
