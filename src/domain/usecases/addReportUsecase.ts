import Report from "../entities/Report";
import { supabase } from "../../utils/client";

export const addReportUsecase = async (newReport: Report): Promise<Report> => {
  try {
    const { data, error } = await supabase
      .from("reports")
      .insert(newReport)
      .select();
    if (error) {
      throw new Error(error.message);
    }
    return new Report(data[0].name, data[0].id, data[0].created_at);
  } catch (error: any) {
    return error;
  }
};
