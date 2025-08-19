import prisma from "../../prisma/prismaClient";

class RoleService {
  static async createRole(name: string) {
    return await prisma.role.create({ data: { name } });
  }

  static async getAllRoles() {
    return await prisma.role.findMany();
  }

  static async getRoleById(id: string) {
    return await prisma.role.findUnique({ where: { id } });
  }

  static async updateRole(id: string, name: string) {
    return await prisma.role.update({ where: { id }, data: { name } });
  }

  static async deleteRole(id: string) {
    return await prisma.role.delete({ where: { id } });
  }
}

export default RoleService;
