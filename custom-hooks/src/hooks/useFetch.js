import { useState } from "react";
const BASE_URL =
  "https://task-list-e73ae-default-rtdb.europe-west1.firebasedatabase.app/";

const useFetch = () => {
  const [value, setValue] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchTasksHandler = async (
    method = "GET",
    task = { id: "", text: "" }
  ) => {
    try {
      setPending(true);
      setError(null);

      let response = null;

      if (method === "DELETE") {
        response = await fetch(BASE_URL + "tasks/" + task.id + ".json", {
          method,
        });
      } else if (method === "PATCH") {
        response = await fetch(BASE_URL + "tasks/" + task.id + ".json", {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: task.text }),
        });
      } else {
        response = await fetch(BASE_URL + "tasks.json", {
          method,
          headers: {
            "Content-Type": method !== "GET" ? "application/json" : "",
          },
          body: method !== "GET" ? JSON.stringify({ title: task.text }) : null,
        });
      }

      if (response.ok) {
        const data = await response.json({});
        if (method === "GET") {
          setValue(data);
        } else {
          fetchTasksHandler();
        }
      }
    } catch (error) {
      setError({
        message: error.message || "something went wrong",
      });
    }

    setPending(false);
  };

  return { pending, error, value, fetchTasksHandler };
};

export default useFetch;