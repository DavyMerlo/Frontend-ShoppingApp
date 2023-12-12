import User from "../entities/User";

export interface ErrorResponse {
  errors: { field: string; message: string }[];
  message: string;
  status: number;
}