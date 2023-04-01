import Report from "../entities/Report";
import { supabase } from "../../utils/client";

export const getReportsUsecase = async (): Promise<Report[]> => {
  try {
    const { data, error } = await supabase.from("reports").select();
    if (error) {
      throw new Error(error.message);
    }
    return data.map((report: any) => {
      return new Report(report.name, report.id, report.created_at);
    });
  } catch (error: any) {
    return error;
  }  
}