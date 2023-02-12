import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { TranType } from "../data/entities/TranType";
import { KakeiboContext } from "../kakeibo";

export default function useTranTypes() {
  const { tranTypes } = useContext(KakeiboContext);

  const { data, isLoading } = useQuery(["tranType"], tranTypes.getAll);

  return {
    isLoading,
    data,
  };
}
