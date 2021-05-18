import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../api/GoogleTranslate";

const Convert = ({ language, text }) => {
  const [output, setOutput] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    axios
      .post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            source: "en",
            target: language.value,
            key: API_KEY,
          },
        }
      )
      .then((data) => setOutput(data.data.data.translations[0].translatedText))
      .catch((err) => console.log(err));
  }, [language, debouncedText]);

  return (
    <div>
      <h3 className="ui header">Output</h3>
      <div>{output}</div>
    </div>
  );
};
export default Convert;
