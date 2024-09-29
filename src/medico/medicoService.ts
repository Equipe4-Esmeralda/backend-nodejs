import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createMedico = async (data: any) => {
    return await prisma.medico.create({ data });
};

export const getMedicoById = async (id: string) => {
    return await prisma.medico.findUnique({
        where: { id },
        include: { socilitacoes: true } // Include related solicitacoes
    });
};

export const getAllMedicos = async () => {
    return await prisma.medico.findMany({
        include: { socilitacoes: true }
    });
};

export const updateMedico = async (id: string, data: any) => {
    return await prisma.medico.update({
        where: { id },
        data,
    });
};

export const deleteMedico = async (id: string) => {
    return await prisma.medico.delete({ where: { id } });
};