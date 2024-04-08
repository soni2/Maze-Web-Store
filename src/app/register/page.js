import Input from "@/Components/ui/Input";
import Button from "@/Components/ui/Button";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Form } from "./Form";

export default function Register() {
  //   const supabase = createClientComponentClient();

  //   const onSubmit = async (formData) => {
  //     "use server";

  //     const name = formData.get("name");
  //     const username = formData.get("username");
  //     const email = formData.get("email");
  //     const password = formData.get("password");

  //     const { error } = await supabase.auth.signUp({
  //       name,
  //       email,
  //       username,
  //       password,
  //       options: {
  //         emailRedirectTo: "http://localhost:3000/auth/callback",
  //       },
  //     });

  //     console.log(error);
  //   };

  //   return (
  //     <form className="mx-auto max-w-sm space-y-6" action={onSubmit} id="form">
  //       <div className="space-y-2 text-center">
  //         <h1 className="text-3xl font-bold">Create an account</h1>
  //         <p className="text-gray-500 dark:text-gray-400">
  //           Enter your information to get started
  //         </p>
  //       </div>
  //       <div className="space-y-2">
  //         <label htmlFor="name">Name</label>
  //         <Input id="name" placeholder="John Doe" required />
  //       </div>
  //       <div className="space-y-2">
  //         <label htmlFor="username">Username</label>
  //         <Input id="username" placeholder="johndoe" required />
  //       </div>
  //       <div className="space-y-2">
  //         <label htmlFor="email">Email</label>
  //         <Input id="email" placeholder="mail@example.com" required />
  //       </div>
  //       <div className="space-y-2">
  //         <label htmlFor="password">Password</label>
  //         <Input id="password" required type="password" />
  //       </div>
  //       <Button type="submit">Sign Up</Button>
  //       <Button className="w-full" onClick={undefined}>
  //     Log In
  //   </Button>
  //     </form>
  //   );
  return <Form />;
}
