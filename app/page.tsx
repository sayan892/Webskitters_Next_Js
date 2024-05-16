'use client'
import SignInPage from "./SignIn/page";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/product");
  };
  return <SignInPage onSignIn={handleSignIn} />;
}
