import { CreateOpject, UpdateOpject } from "../interfaces/qualifiersinterface";
import { tblQualifier } from "../models/tblQualifier";
class QualifiersRepo {
  /**
   * getAllQualifiers
   */
  public static async getAllQualifiers(page: number, limit: number) {
    const offset = (page - 1) * limit;
    try {
      const qualifiers = await tblQualifier.findAll({
        offset,
        limit,
      });
      return qualifiers;
    } catch (error) {
      throw new Error("Unable to fetch qualifiers data");
    }
  }
  /**
   * getOneQualifier
   */
  public static async getOneQualifier(qualifierId: number) {
    try {
      const qualifier = await tblQualifier.findOne({
        where: {
          id: qualifierId,
        },
      });
      if (!qualifier) throw new Error(`Unable to get qualifier with id ${qualifierId}`);
      
      return qualifier;
    } catch (error) {
      throw new Error("Unable to fetch qualifiers data");
    }
  }
  /**
   * postQualifier
   */
  public static async postQualifier(createOpject: CreateOpject) {
    try {
      const qualifier = await tblQualifier.create(createOpject);
      return qualifier;
    } catch (error) {
      throw new Error("Unable to fetch qualifiers data");
    }
  }
  /**
   * updateQualifier
   */
  public static async updateQualifier(
    updateObject: UpdateOpject,
    qualifierId: number
  ) {
    try {
      const isUpdated = await tblQualifier.update(updateObject, {
        where: { id: qualifierId },
      });
      if (isUpdated[0] === 0) throw new Error("the id dosen't exist");
      return;
    } catch (error) {
      throw new Error("Unable to fetch qualifiers data");
    }
  }
  /**
   * deleteQualifier
   */
  public static async deleteQualifier(qualifierId: number) {
    try {
      const isDeleted = await tblQualifier.destroy({
        where: { id: qualifierId },
      });
      if (isDeleted === 0) throw new Error("the id dosen't exist");
      return;
    } catch (error) {
      throw new Error("Unable to fetch qualifiers data");
    }
  }
}
export default QualifiersRepo;
