import axios from "axios";

const API_BASE_URL = "http://srv629443.hstgr.cloud/"; // Troque aqui para o link da api de produço


const API_TEST_URL = "http://localhost:5000/api"; // Troque aqui para o link de api de homologação

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const apiTest = axios.create({
  baseURL: API_TEST_URL,
});
