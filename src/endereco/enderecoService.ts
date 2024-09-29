import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createEndereco = async (data: any) => {
    return await prisma.endereco.create({ data });
};

export const getEnderecoById = async (id: string) => {
    return await prisma.endereco.findUnique({ where: { id } });
};

export const getAllEnderecos = async () => {
    return await prisma.endereco.findMany();
};

export const updateEndereco = async (id: string, data: any) => {
    return await prisma.endereco.update({
        where: { id },
        data,
    });
};

export const deleteEndereco = async (id: string) => {
    return await prisma.endereco.delete({ where: { id } });
};