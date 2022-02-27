const saveData = (data) => {
  localStorage.setItem("_data", JSON.stringify(data));
};

const loadData = () => {
  const localData = localStorage.getItem("_data");

  if (localData === null) {
    return [];
  }

  return JSON.parse(localData);
};

export { saveData, loadData };
