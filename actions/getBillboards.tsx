import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export default getBillboard;
