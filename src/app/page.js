import { AuthButton } from "@/Components/AuthButton";
import { LoginForm } from "@/Components/LoginForm";

export default async function Home(props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
      <AuthButton />
    </main>
  );
}
