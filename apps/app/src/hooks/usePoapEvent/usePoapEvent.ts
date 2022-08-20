import { fetchPoapEvent } from "@lightdotso/services";
import type { PoapEvent } from "@lightdotso/types";
import useSWR from "swr";

import { SwrKeys } from "@lightdotso/app/config/SwrKeys";
import { LIGHT_API_URL } from "@lightdotso/app/const/api";
import { fetcher } from "@lightdotso/app/libs/services/fetcher";

export const usePoapEvent = (eventId?: string, initialToken?: PoapEvent) => {
  const poapEventFetcher = async (key, eventId) => {
    const result = await fetchPoapEvent(eventId);
    if (result.error) {
      const url = `${LIGHT_API_URL}/api/poap/event/${eventId}`;
      const backupResult = await fetcher(url);
      return backupResult;
    }
    return result;
  };

  const { data, error } = useSWR<PoapEvent>(
    eventId ? [SwrKeys.POAP_EVENT, eventId] : null,
    poapEventFetcher,
    {
      fallbackData: initialToken,
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    event: data,
  };
};
