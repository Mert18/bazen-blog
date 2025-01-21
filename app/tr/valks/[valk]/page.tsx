import SingleValkContent from "@/components/page/SingleValkContent";
import { ISingleValkContent } from "@/util/types";
import React from "react";

const Valk = ({ params }: ISingleValkContent) => {
  return <SingleValkContent params={params} />
};

export default Valk;
