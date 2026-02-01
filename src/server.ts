import app from "./app.js";
import { prisma } from "./lib/prisma.js";

const PORT = 5000;

async function main() {
  try {
    await prisma.$connect();

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
