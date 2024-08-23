"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Sharing.." : "Share Meal"}</button>
  );
};
export default MealsFormSubmit;
