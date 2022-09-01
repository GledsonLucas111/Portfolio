import * as React from "react";
import axios from "axios";
import { BASE_URL } from "constants/urls";

const UseRequestData = (initialState: any, url: string) => {
  const [data, setData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL + url}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return [data, loading];
};
export default UseRequestData;
