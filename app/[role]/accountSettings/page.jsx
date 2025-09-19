"use client"; // 👈 required if you’re using hooks

import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams(); 
  console.log(params);
  const role = params.role; // 👈 get the dynamic route param
  console.log(role);

  return (
    <div>
      This is Profile Page for: <strong>{role}</strong>
    </div>
  );
};

export default Page;
