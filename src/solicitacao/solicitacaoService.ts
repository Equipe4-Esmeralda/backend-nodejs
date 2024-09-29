import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createSolicitacao = async (data: any) => {
  return await prisma.solicitacao.create({ data });
};

export const getSolicitacaoById = async (id: string) => {
  return await prisma.solicitacao.findUnique({ 
    where: { id },
    include: { 
      medicoOrigem: true, 
      paciente: true,
      transferencia: true 
    } 
  });
};

export const getAllSolicitacoes = async () => {
  return await prisma.solicitacao.findMany({
    include: { 
      medicoOrigem: true, 
      paciente: true,
      transferencia: true 
    } 
  });
};

export const updateSolicitacao = async (id: string, data: any) => {
  return await prisma.solicitacao.update({
    where: { id },
    data,
  });
};

export const deleteSolicitacao = async (id: string) => {
  return await prisma.solicitacao.delete({ where: { id } });
};