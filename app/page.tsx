'use client'
import { useState } from "react";
import SignInPage from "./pages/SignIn/signIn";
import { useRouter } from "next/navigation";
import ProductTable from "./pages/product/productTable";
export default function Home() {
  const router = useRouter();
 const [isValid,setIsValid] = useState(false)
  const handleSignIn = () => {
    // Handle sign-in logic
    // router.push('/product')
    setIsValid(true)
  };
  return (
  <>
    {isValid && <ProductTable />}
      {!isValid && <SignInPage onSignIn={handleSignIn} />}
      </>
  
  );
}
