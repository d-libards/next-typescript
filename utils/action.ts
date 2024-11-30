'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { readFile, writeFile } from 'fs/promises';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const rawData = Object.fromEntries(formData);

  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  console.log(rawData);
  console.log(firstName, lastName);

  try {
    await saveUser(newUser);
    // revalidatePath('/actions');
  } catch (error) {
    console.log(error);
  }
  redirect('/');
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf8' });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};
