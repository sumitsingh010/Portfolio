import React, { useState } from "react";
import EnglishMessages from "./../language/en.json";
import { IntlProvider } from "react-intl";

const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  let defaultLocale = "en-US";
  let defaultMessages = EnglishMessages;

  const [messages, setMessages] = useState(defaultMessages);
  const [locale, setLocale] = useState(defaultLocale);

  const selectLanguage = (language) => {
    switch (language) {
      default:
        setMessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <LanguageContext.Provider value={{ selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
