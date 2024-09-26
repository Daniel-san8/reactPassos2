"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function setCookie(key: string, value: string) {
  cookies().set(key, value, {
    httpOnly: true,
    secure: true,
  });

  // para revalidar o cache de uma rota. Funciona em apenas server components
  //   revalidatePath("/api");

  // para revalidar todas rodas a partir da rota do argumento, apenas em server components
  //   revalidateTag("api");
}
