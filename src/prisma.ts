import { PrismaClient } from "@prisma/client";

const PrismaClientConfig = {
	log: ['query']
}

const prisma = new PrismaClient(PrismaClientConfig);

export { prisma } ;
