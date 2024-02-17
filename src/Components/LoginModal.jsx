import AuthButtonServer from "@/Components/AuthButtonServer";
import { LoginForm } from "@/Components/LoginForm";

export default function LoginModal() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center">
        <h2>Welcome!</h2>
        <LoginForm />
        <span className="flex flex-row">
          <br />
          <p>Or</p>
          <br />
        </span>
        <AuthButtonServer />
      </div>
    </div>
  );
}
