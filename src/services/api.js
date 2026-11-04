const BASE_URL = "https://wedev-api.sky.pro/api";

export const request = async (url, options) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Ошибка сервера (${response.status})`);
    }

    return response.json();
  } catch (err) {
    if (err.message === "Failed to fetch") {
      throw new Error("Сервер недоступен. Проверьте подключение к интернету", {
        cause: err,
      });
    }
  }
};
