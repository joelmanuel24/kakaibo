import {
  useMatch,
  useNearestMatch,
  useRouter,
  useSearch,
} from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { indexRoute } from "../pages";

function parseQueryParams(queryParams: string) {
  const params = new URLSearchParams(queryParams);
  let objParams: { [key: string]: string } = {};

  for (const key of params.keys()) {
    const element = params.get(key);
    objParams[key] = element!;
  }

  return objParams;
}

export function useQueryParams() {
  const { pathname } = useNearestMatch();
  const { navigate } = useMatch(pathname);
  const [queryParams, setQueryParams] = useState<{ [key: string]: string }>(
    parseQueryParams(window.location.search)
  );

  // useEffect(() => {
  //   // const params = new URLSearchParams(window.location.search);
  //   // window.location.search = params.toString();
  //   const listenToPopstate = () => {
  //     console.log(window.location.search);
  //   };
  //   window.addEventListener("popstate", listenToPopstate);

  //   return () => {
  //     window.removeEventListener("popstate", listenToPopstate);
  //   };
  // }, []);

  const set = (name: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);

    // window.location.search = params.toString();
    // window.history.pushState({}, "", params.toString());
    // navigate({ search: (old) => ({ ...old, [name]: value }) });
    // window.history.replaceState(null, "", "?" + params.toString());
    // window.location.search = params.toString();

    /// Change some part of the URL params

    // const newurl =
    //   window.location.protocol +
    //   "//" +
    //   window.location.host +
    //   window.location.pathname +
    //   "?" +
    //   params.toString() +
    //   window.location.hash;
    // window.history.replaceState({ path: newurl }, "", newurl);

    navigate({ search: (old) => ({ ...old, [name]: value }) });

    // var newq = parseQueryParams(params.toString());
    // console.log(newq);
    // setQueryParams(newq);
  };

  return {
    params: queryParams,
    set,
  };
}
