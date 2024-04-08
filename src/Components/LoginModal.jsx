import AuthButtonServer from "@/Components/AuthButtonServer";
import { LoginForm } from "@/Components/LoginForm";

export default function LoginModal() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center bg-slate-800 px-10 py-10 max-h-96">
      <h2>Welcome!</h2>
      <LoginForm />
      <span className="flex flex-row">
        <p>Or</p>
      </span>
      <AuthButtonServer />
    </div>
  );
}
