import worker from "../src/worker.mjs";

export default worker.fetch;

export const config = {
  runtime: "nodejs",
  regions: ["hkg1"],
};

// trigger: deployment protection now standard
