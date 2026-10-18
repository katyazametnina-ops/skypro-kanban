const BASE_URL = "https://wedev-api.sky.pro/api";

export const request = async (url, options) => {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    throw new Error(errorData.error);
  }

  return response.json();
};
