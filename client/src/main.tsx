import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { msalInstance } from "./msalInstance";
import "./index.css";

async function startApp() {
  await msalInstance.initialize();

  const redirectResult = await msalInstance.handleRedirectPromise();

  if (redirectResult?.account) {
    msalInstance.setActiveAccount(redirectResult.account);
  }

  const mountNode =
    document.getElementById("root") ?? document.getElementById("api");

  ReactDOM.createRoot(mountNode!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

startApp().catch((error) => {
  console.error("Failed to start app", error);
});