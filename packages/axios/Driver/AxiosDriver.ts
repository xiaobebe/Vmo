import axios, { AxiosPromise, AxiosRequestConfig, AxiosStatic } from "axios";
import { IDriver } from "@vmojs/base/Interface/IDriver";

export interface IAxiosDriver extends AxiosStatic, IDriver {
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}

// @ts-ignore
const AxiosDriver: IAxiosDriver = {
  set: axios.post,
  ...axios
};

export default AxiosDriver;
