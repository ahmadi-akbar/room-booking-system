import api from "./init";

export const listRooms = () => api.get("/rooms").then(res => res.data);
