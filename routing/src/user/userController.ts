import { addUser, getUser, updateUser, deleteUser } from './userService';

export function addUserController(data: string): number {
  return addUser(data);
}

export function getUserController(fileName: string): number {
  return getUser(fileName);
}

export function updateUserController(data: string, fileName: string) {
  return updateUser(data, fileName);
}

export function deleteUserController(fileName: string) {
  return deleteUser(fileName);
}
