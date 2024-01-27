import React from "react";

const Form = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  //   function handleChange(key) {
  //     return (e) => {
  //       setForm({ ...form, [key]: e.target.value });
  //     };
  //   }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  console.log(form);

  return (
    <form onClick={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={({ target }) => setForm({ ...form, name: target.value })}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={({ target }) =>
            setForm({ ...form, password: target.value })
          }
        ></input>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
