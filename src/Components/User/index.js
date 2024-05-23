import { FlyoutUser } from "./FlyoutUser";

export async function User({ children }) {
  return (
    <>
      {children}
      <FlyoutUser />
    </>
  );
}
