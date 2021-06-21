import fs from 'fs';

export function addUser(data: string): number {
  if (data === '') {
    return 400;
  }

  fs.writeFile('user.txt', data, () => {
    return 500;
  });
  return 201;
}

export function getUser(fileName: string): number {
  if (!fs.existsSync('user.txt')) {
    return 404;
  }

  const data = fs.readFileSync(fileName, 'utf8');
  return 200;
}

export function updateUser(data: string, fileName: string): number {
  if (!fs.existsSync(fileName)) {
    return 404;
  }

  fs.writeFile(fileName, data, (error) => {
    throw new Error('Bad');
  });
  return 200;
}

export function deleteUser(fileName: string): number {
  if (!fs.existsSync(fileName)) {
    return 404;
  }

  fs.unlink(fileName, (error) => {
    console.error(error);
  });
  return 200;
}