"use server";

import { revalidatePath } from "next/cache";

export async function adicionar(
  state: { errors: string[] },
  formData: FormData
) {
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error("Erro ao adicionar produto");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }

  revalidatePath("/");
  return {
    redirect: {
      destination: "/outroCaminho",
      state: false,
    },
  };

  // return { errors: [] };
}
