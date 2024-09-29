import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTransferencia = async (data: any) => {
  // Ensure `medicamentoIDs` is an array of strings (ObjectIds)
  if (data.medicamentoIDs && !Array.isArray(data.medicamentoIDs)) {
    data.medicamentoIDs = [data.medicamentoIDs];
  }
  return await prisma.transferencia.create({
    data: {
      ...data,
      medicamentoIDs: {
        set: data.medicamentoIDs || [] // Handle potential empty array
      }
    },
    include: { 
      solicitacao: true,
      destino: true,
      origem: true,
      medicamento: true 
    }
  });
};

export const getTransferenciaById = async (id: string) => {
  return await prisma.transferencia.findUnique({
    where: { id },
    include: { 
      solicitacao: true,
      destino: true,
      origem: true,
      medicamento: true 
    }
  });
};

export const getAllTransferencias = async () => {
  return await prisma.transferencia.findMany({
    include: { 
      solicitacao: true,
      destino: true,
      origem: true,
      medicamento: true 
    }
  });
};

export const updateTransferencia = async (id: string, data: any) => {
  // Handle updating `medicamentoIDs`
  if (data.medicamentoIDs) {
    if (!Array.isArray(data.medicamentoIDs)) {
      data.medicamentoIDs = [data.medicamentoIDs];
    }
    data.medicamentoIDs = { set: data.medicamentoIDs };
  }

  return await prisma.transferencia.update({
    where: { id },
    data,
    include: { 
      solicitacao: true,
      destino: true,
      origem: true,
      medicamento: true 
    }
  });
};

export const deleteTransferencia = async (id: string) => {
  return await prisma.transferencia.delete({ where: { id } });
};