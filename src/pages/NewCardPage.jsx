import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import Calendar from "../components/Calendar/Calendar";
import * as S from "./NewCardPage.styled";

export default function NewCardPage() {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    formData.title.trim() !== "" &&
    formData.description.trim() !== "" &&
    Boolean(formData.date);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      setIsSubmitting(true);
      await addTask(formData);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose as={Link} to="/">
              &#10006;
            </S.PopNewCardClose>
            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <S.PopNewCardWrap>
              <S.PopNewCardForm id="newTaskForm" onSubmit={handleSubmit}>
                <S.FormNewBlock>
                  <S.SubTitle htmlFor="formTitle">Название задачи</S.SubTitle>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleChange}
                  />
                </S.FormNewBlock>

                <S.FormNewBlock>
                  <S.SubTitle htmlFor="textArea">Описание задачи</S.SubTitle>
                  <S.FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleChange}
                  />
                </S.FormNewBlock>

                <S.Categories>
                  <S.CategoriesTitle>Категория</S.CategoriesTitle>
                  <S.CategoriesThemes>
                    <S.CategoriesTheme
                      className={`_orange ${formData.topic === "Web Design" ? "_active-category" : ""}`}
                      onClick={() =>
                        setFormData({ ...formData, topic: "Web Design" })
                      }
                    >
                      <p className="_orange">Web Design</p>
                    </S.CategoriesTheme>
                    <S.CategoriesTheme
                      className={`_green ${formData.topic === "Research" ? "_active-category" : ""}`}
                      onClick={() =>
                        setFormData({ ...formData, topic: "Research" })
                      }
                    >
                      <p className="_green">Research</p>
                    </S.CategoriesTheme>
                    <S.CategoriesTheme
                      className={`_purple ${formData.topic === "Copywriting" ? "_active-category" : ""}`}
                      onClick={() =>
                        setFormData({ ...formData, topic: "Copywriting" })
                      }
                    >
                      <p className="_purple">Copywriting</p>
                    </S.CategoriesTheme>
                  </S.CategoriesThemes>
                </S.Categories>
              </S.PopNewCardForm>

              <Calendar
                selectedDate={formData.date}
                onSelectDate={(date) =>
                  setFormData({ ...formData, date: date.toISOString() })
                }
              />
            </S.PopNewCardWrap>

            <S.FormNewSubmit
              form="newTaskForm"
              type="submit"
              disabled={!isFormValid || isSubmitting}
              style={{
                opacity: !isFormValid || isSubmitting ? 0.5 : 1,
                cursor:
                  !isFormValid || isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Создание..." : "Создать задачу"}
            </S.FormNewSubmit>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}
