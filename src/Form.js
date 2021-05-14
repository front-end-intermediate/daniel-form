import React from "react";

export const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
