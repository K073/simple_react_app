export const PRODUCTION_ENV = "prod";

const config = {
  apiUrl: process.env.REACT_APP_URL || "https://test.manana.life",
    stateName: "exampleStateName"
};

export default config;
