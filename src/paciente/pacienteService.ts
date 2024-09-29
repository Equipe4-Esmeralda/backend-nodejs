import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPaciente = async (data: any) => {
  return await prisma.paciente.create({ data });
};

export const getPacienteById = async (id: string) => {
  return await prisma.paciente.findUnique({ 
    where: { id },
    include: { solicitacao: true } // Include related solicitacao data
  });
};

export const getAllPacientes = async () => {
  return await prisma.paciente.findMany({
    include: { solicitacao: true } 
  });
};

export const updatePaciente = async (id: string, data: any) => {
  return await prisma.paciente.update({
    where: { id },
    data,
  });
};

export const deletePaciente = async (id: string) => {
  return await prisma.paciente.delete({ where: { id } });
};