export interface ApiResponse<DataType> {
  status?: number;
  error?: string;
  data?: DataType;
}
