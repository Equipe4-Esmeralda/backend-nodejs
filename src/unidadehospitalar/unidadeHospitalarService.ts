import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUnidadeHospitalar = async (data: any) => {
  return await prisma.unidadeHospitalar.create({ data });
};

export const getUnidadeHospitalarById = async (id: string) => {
  return await prisma.unidadeHospitalar.findUnique({ 
    where: { id },
    include: { endereco: true } // Include related endereco data
  });
};

export const getAllUnidadesHospitalares = async () => {
  return await prisma.unidadeHospitalar.findMany({
    include: { endereco: true } 
  });
};

export const updateUnidadeHospitalar = async (id: string, data: any) => {
  return await prisma.unidadeHospitalar.update({
    where: { id },
    data,
  });
};

export const deleteUnidadeHospitalar = async (id: string) => {
  return await prisma.unidadeHospitalar.delete({ where: { id } });
};