import { CreateOpject, UpdateOpject } from "../controllers/Qualifiers/qualifiersinterface";
import { tblqualifier } from "../models/tblqualifier";
class QualifiersRepo {
  /**
   * getAllQualifiers
   */
  public static async getAllQualifiers(page: number, limit: number) {
    const offset = (page - 1) * limit;
    try {
      const qualifiers = await tblqualifier.findAll({
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
      const qualifier = await tblqualifier.findOne({
        where: {
          id: qualifierId,
        },
      });
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
      const qualifier = await tblqualifier.create(createOpject);
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
      const isUpdated = await tblqualifier.update(updateObject, {
        where: { id: qualifierId },
      });
      return isUpdated;
    } catch (error) {
      throw new Error("Unable to fetch qualifiers data");
    }
  }
  /**
   * deleteQualifier
   */
  public static async deleteQualifier(qualifierId: number) {
    try {
      const isDeleted = await tblqualifier.destroy({
        where: { id: qualifierId },
      });
      return isDeleted;
    } catch (error) {
      throw new Error("Unable to fetch qualifiers data");
    }
  }
}
export default QualifiersRepo;
