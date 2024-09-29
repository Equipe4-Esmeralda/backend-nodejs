import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createMedicamento = async (data: any) => {
  // Ensure `transferenciaIDs` is an array of strings (ObjectIds)
  if (data.transferenciaIDs && !Array.isArray(data.transferenciaIDs)) {
    data.transferenciaIDs = [data.transferenciaIDs];
  }
  return await prisma.medicamento.create({ 
    data: {
      ...data,
      transferenciaIDs: {
        set: data.transferenciaIDs || [] // Handle potential empty array
      }
    } 
  });
};

export const getMedicamentoById = async (id: string) => {
  return await prisma.medicamento.findUnique({ 
    where: { id },
    include: { transferencia: true } // Include related transferencias
  });
};

export const getAllMedicamentos = async () => {
  return await prisma.medicamento.findMany({
    include: { transferencia: true } 
  });
};

export const updateMedicamento = async (id: string, data: any) => {
  // Handle updating `transferenciaIDs`
  if (data.transferenciaIDs) {
    if (!Array.isArray(data.transferenciaIDs)) {
      data.transferenciaIDs = [data.transferenciaIDs];
    }
    data.transferenciaIDs = { set: data.transferenciaIDs };
  }

  return await prisma.medicamento.update({
    where: { id },
    data,
  });
};

export const deleteMedicamento = async (id: string) => {
  return await prisma.medicamento.delete({ where: { id } });
};