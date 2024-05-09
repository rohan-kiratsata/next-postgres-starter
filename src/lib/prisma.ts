import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const getPrismaInstance = () => {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  } else {
    if (!prisma) {
      prisma = new PrismaClient();
    }
    return prisma;
  }
};

export default getPrismaInstance();
