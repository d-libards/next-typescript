import { NextRequest, NextResponse } from 'next/server';
import { saveUser } from '@/utils/action';

export const GET = async (request: NextRequest) => {
  console.log(request.url);
  console.log(request.nextUrl.searchParams.get('id'));

  // const users = await fetchUsers();
  return NextResponse.redirect(new URL('/', request.url));
};

export const POST = async (request: Request) => {
  const user = await request.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);
  return Response.json({ msg: 'user created' });
};
