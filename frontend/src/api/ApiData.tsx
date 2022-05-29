import authServer from "../serviceAuth/authServer";
import { instance } from "./axios";

export interface Data {
    ID: number,
    id: string,
    Label: string,
    FileName: string,
}

export default class ApiData {
    static async getAllData() {
        return await instance.get<Data[]>(
            `data`, 
            {headers: {Authorization : `Bearer ${authServer.getToken()}`}},
        );
    }
    static async getDataById(id: number | string) {
        return await instance.get<Data[]>(
            `/data/filter?field=id&val=${id}`, 
            {headers: {Authorization : `Bearer ${authServer.getToken()}`}},
        );
    }

    static async postData(file: File | null, desc: string | null) {
        return instance.post<Data>(
          'data',
          { File: file, Label: desc},
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${authServer.getToken()}`,
            },
          },
        );
      }
}