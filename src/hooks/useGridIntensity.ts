import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { format, subHours } from "date-fns";
import { GridIntensity } from "../enums";

type GridValue = {
  value: number;
  start_time: string;
  end_time: string;
};

export default function useGridIntensity() {
  const [gridIntensity, setGridIntensity] = useState<GridIntensity>(
    GridIntensity.HIGH
  );
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [gridLoad, setGridLoad] = useState(0);
  const [gridGeneration, setGridGeneration] = useState(0);

  const startTime = subHours(Date.now(), 4);
  const endTime = Date.now();

  const gridLoadUrl = "https://api.fingrid.fi/v1/variable/124/events/json";
  const gridGenerationUrl = "https://api.fingrid.fi/v1/variable/74/events/json";

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        const loadResponse = await axios.get<GridValue[]>(gridLoadUrl, {
          params: {
            start_time: format(startTime, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
            end_time: format(endTime, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
          },
          headers: {
            "x-api-key": import.meta.env.REACT_APP_API_KEY,
          },
        });

        setGridLoad(loadResponse.data[0].value);

        const generationResponse = await axios.get<GridValue[]>(
          gridGenerationUrl,
          {
            params: {
              start_time: format(startTime, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
              end_time: format(endTime, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
            },
            headers: {
              "x-api-key": import.meta.env.REACT_APP_API_KEY,
            },
          }
        );

        setGridGeneration(generationResponse.data[0].value);

        const delta =
          generationResponse.data[0].value - loadResponse.data[0].value;

        if (delta < -200) {
          setGridIntensity(GridIntensity.HIGH);
        }

        if (delta < 0 && delta > -200) {
          setGridIntensity(GridIntensity.MEDIUM);
        }

        if (delta > 0) {
          setGridIntensity(GridIntensity.LOW);
        }
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [gridLoadUrl, gridGenerationUrl]);

  return { gridIntensity, gridLoad, gridGeneration, error, isLoading };
}
