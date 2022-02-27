import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  crossDomain: true,
});

function handleSuccess(response, onSuccess, onFailed, onFinish) {
  var data = "";
  var message = "";
  var error = {};

  if (typeof response.message === "string") {
    message = response.message;
  }
  if (typeof response.error === "object") {
    error = response.error;
  }
  if (typeof response.data === "object") {
    data = response.data;
  } else {
    data = message;
  }
  if (
    response !== undefined &&
    response.status > 399 &&
    response.status < 200
  ) {
    onFailed(message, error);
    return typeof onFinish === "function" ? onFinish() : null;
  }
  onSuccess(data, message);
  return typeof onFinish === "function" ? onFinish() : null;
}

function handleError(error, onSuccess, onFailed, onFinish) {
  if (
    typeof error.response === "object" &&
    typeof error.response.data === "object"
  ) {
    const data = error.response;
    onFailed(data.status, data.data, data.message);
  } else {
    const data = error.response;
    let status =
      data !== null && data.status !== undefined ? data.status : "error";
    onFailed(status, {}, "Internal server error");
  }
  return typeof onFinish === "function" ? onFinish() : null;
}

export const network = {
  get(url, params, onSuccess, onFailed, onFinish) {
    instance
      .get(url, {
        params: params,
      })
      .then((response) => {
        return handleSuccess(response, onSuccess, onFailed, onFinish);
      })
      .catch((error) => {
        console.error(error);
        return handleError(error, onSuccess, onFailed, onFinish);
      });
  },

  post(url, data, onSuccess, onFailed, onFinish) {
    instance
      .post(url, data, {
        headers: {
          Authorization: `Bearer`,
        },
      })
      .then((response) => {
        return handleSuccess(response, onSuccess, onFailed, onFinish);
      })
      .catch((error) => {
        console.error(error);
        return handleError(error, onSuccess, onFailed, onFinish);
      });
  },

  put(url, data, onSuccess, onFailed, onFinish) {
    instance
      .put(url, data, {
        headers: {
          Authorization: `Bearer`,
        },
      })
      .then((response) => {
        return handleSuccess(response, onSuccess, onFailed, onFinish);
      })
      .catch((error) => {
        console.error(error);
        return handleError(error, onSuccess, onFailed, onFinish);
      });
  },

  delete(url, onSuccess, onFailed, onFinish) {
    instance
      .delete(url, {
        headers: {
          Authorization: `Bearer`,
        },
      })
      .then((response) => {
        return handleSuccess(response, onSuccess, onFailed, onFinish);
      })
      .catch((error) => {
        console.error(error);
        return handleError(error, onSuccess, onFailed, onFinish);
      });
  },
};
