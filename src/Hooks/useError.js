"use client";
import { useState } from "react";

export function useError() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function handleError(e) {
    // console.log(e);

    setErrorMsg(e);
    setError(true);

    // setTimeout(() => {
    //   setError(false);
    // }, 4000);
  }

  return { error, handleError, errorMsg };
}
