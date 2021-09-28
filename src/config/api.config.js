import { apiGenerator } from "../helpers";

// export const BASE_URL = "http://128.199.22.102:8851/api"; // BASE URL

// export const BASE_URL = "http://192.168.1.75:8850/api"; // BASE URL local
// export const FILE_URL = "http://192.168.1.75:8851"; // FILE URL

export const BASE_URL = "http://143.110.243.194:8849/api"; // Dev Server API -
export const FILE_URL = "http://143.110.243.194:8849/assets"; // Dev FILE URL
// export const BASE_URL = "http://143.110.243.194:8848/api"; // BASE URL
// export const FILE_URL = "http://143.110.243.194:8848/assets"; // FILE URL
export const TABLE_LIMIT = 5;

// API FUNCTION
export const api = apiGenerator({ baseURL: BASE_URL });

// API PATHS
export const APIS = {
  login: "/auth/login",
  logout: "/auth/logout",
  forget: "auth/forget",
  register: "auth/register",

  verify: "/auth/verify",
  forgot: "/auth/forget",

  change: "/auth/change",
  common: "/common",
  news: "/common/type?name=news",
  user: "/users",
  door: "/door",
  doorPart: "/doorPart",
  floor: "/floor",
  client: "/contractor",
  contractorSite: "/site/contractor",
  building: "/site",
  template: "/template",
  deactivateUser: "/users/deactivate",
  job: "/job",
  complain: "/complain",
  pastInspection: "/response/doorPart",
  pastInspectionDetail: "/response/jobPart",
  schedule: "/schedule",
  workerTask: "/job/worker",
  downloadReport: "/download?type=report&path=",
  dashboard: "/dashboard",
};
