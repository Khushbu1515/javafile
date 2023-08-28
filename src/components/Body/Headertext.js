import React from "react";
import "./Body.css";
export const Headertext = () => {
  return (
    <div className="upper-side">
      <h1>
        I{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>{" "}
        color{" "}
      </h1>

      <h1>This is my First react project</h1>

      <button type="button" class="btn-primary">
        over to you
      </button>
    </div>
  );
};
