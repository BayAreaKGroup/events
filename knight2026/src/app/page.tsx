"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/en/${window.location.hash}`);
  }, [router]);
  return null;
}
