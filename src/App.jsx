import "./App.css";
import LangSwitcher from "./components/LangSwither/LangSwither";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lang, setLang] = useState("uk");

  // Функція для обробки зміни значення в полі пошуку
  const handleChange = (value) => {
    setInputValue(value);
  };

  // Колбек-функція для обробки сабміту форми в LoginForm
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
    // Можна використовувати handleChange тут, оскільки вона тепер доступна у цій області видимості
    handleChange(userData.username); // Приклад, як можна використовувати введене ім'я користувача з форми логіну
  };

  return (
    <>
      <LoginForm onLogin={handleLogin} />
      <SearchBar value={inputValue} onChange={handleChange} />

      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
}

export default App;
