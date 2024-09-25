import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { username: string; senha: string };

  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ username: body.username, password: body.senha }),
  });
  console.log(response.ok);
  if (!response.ok) {
    return Response.json({ erro: "Erro na api" });
  }

  const json = await response.json();

  cookies().set("cookie", json.token, {
    httpOnly: true,
    secure: true,
  });
  return Response.json(json);
}
