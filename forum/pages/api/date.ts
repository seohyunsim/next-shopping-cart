import React from "react";

const date = (req: any, res: any) => {
  return res.status(200).json(new Date());
};

export default date;
