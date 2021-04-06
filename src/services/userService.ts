import api from "../api/axios";
import { RandomUserResponse } from "../models/randomUserResponse";

export async function getUserAxios() {
  return await api.get<RandomUserResponse>("api/?results=10");
}
