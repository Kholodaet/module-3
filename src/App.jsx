import "./App.css";
import Checkbox from "./components/Checkbox/Checkbox";
import ControlForm from "./components/ControlForm/ControlForm";
import LangSwitcher from "./components/LangSwither/LangSwither";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lang, setLang] = useState("uk");
  const [hasAccepted, setHasAccepted] = useState(false);
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleLogin = (userData) => {
    console.log(userData);
    handleChange(userData.username);
  };

  const handleCheckboxChange = (checked) => {
    setHasAccepted(checked);
  };

  const handleControlChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <LoginForm onLogin={handleLogin} />
      <SearchBar value={inputValue} onChange={handleChange} />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <Checkbox
        hasAccepted={hasAccepted}
        onCheckboxChange={handleCheckboxChange}
      />
      <ControlForm
        values={values}
        onChange={handleControlChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
