import fs from "fs";

const addUser = (body: any) => {
  const data = JSON.parse(body);
  const name = data.firstName.toLowerCase();
  const userData = `name: ${
    name[0].toUpperCase() + name.slice(1)
  } email: ${data.email.toLowerCase()}\n`;

  if (fs.existsSync("./users.txt")) {
    fs.appendFile("./users.txt", userData, (error) => handleError(error));
  } else {
    fs.writeFile("users.txt", userData, (error) => handleError(error));
  }
};

const handleError = (error: NodeJS.ErrnoException | null) => {
  console.log(error);
};

export default addUser;
