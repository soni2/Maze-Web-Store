import AuthButtonServer from "@/Components/AuthButtonServer";
import { LoginForm } from "@/Components/LoginForm";
import Sidebar from "@/Components/Sidebar";

export default function LoginModal() {
  return (
    <div className="flex flex-row justify-center bg-slate-50 gab-3 rounded-lg overflow-hidden shadow-md">
      <div className="flex flex-col gap-5 items-center justify-center px-10 py-10">
        <h2 className="text-3xl font-bold text-keppel-500">Welcome!</h2>
        <LoginForm />

        <AuthButtonServer />
      </div>

      <Sidebar
        title="Log-in to discover personalized offers just for you!"
        subTitle="Don't have an account?"
        buttonText="Register"
      />
    </div>
  );
}
