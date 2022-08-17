import { useEnsName } from "wagmi";

export const useEns = (address?: string, initialEns?: string) => {
  const { data, isError, isLoading } = useEnsName({
    address: address,
    chainId: 1,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const fetchEns = (key, address) => {
  //   if (isLoading || !data) {
  //     return null;
  //   }
  //   return data;
  // };

  // const { data: ens, mutate } = useSWR(
  //   address ? [SwrKeys.ENS, address] : null,
  //   fetchEns,
  //   {
  //     fallbackData: initialEns,
  //   },
  // );

  return {
    isLoading: isLoading,
    isError: isError,
    ens: data ?? initialEns,
  };
};
