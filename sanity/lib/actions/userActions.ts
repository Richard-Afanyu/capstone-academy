import { sanity } from "../sanity.server";

type clerkUserData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  createdAt: number;
  role: string;
};

export async function createUser(user: clerkUserData) {
  return await sanity.createIfNotExists({
    _id: user.id,
    _type: "user",
    clerkId: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    role: "student",
    createdAt: new Date(user.createdAt || new Date()).toISOString(),
  });
}

export async function updateUser(user: clerkUserData) {
  return await sanity
    .patch(`${user.id}`)
    .set({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.imageUrl,
      role: "student",
    })
    .commit();
}

export async function deleteUser(userId: string | undefined) {
  const deletedUser = await sanity.delete(`${userId}`);
  return deletedUser;
}
