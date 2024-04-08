"use client";

import { useState } from "react";

export function useModal() {
  const [modalView, setModalView] = useState(false);

  const modalViewToggle = () => {
    setModalView(false);
  };
  return { modalView, modalViewToggle };
}
