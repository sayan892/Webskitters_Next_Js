'use client'
import SignInPage from "./Components/SignIn/signIn";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const handleSignIn = () => {
    // Handle sign-in logic
    router.push('/productTable')
    console.log('Valid')
  };
  return (
    <SignInPage onSignIn={handleSignIn} />
  );
}
