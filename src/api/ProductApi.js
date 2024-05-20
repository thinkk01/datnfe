import Instance from "../axios/Instance";

export const getAllProducts = (page, size, active) => {
  const url = `/api/site/product/get-all?page=${page}&size=${size}&active=${active}`;
  return Instance.get(url);
};
export const filterProducts = (data) => {
  const url = `/api/site/product/filter`;
  return Instance.post(url, data);
};
