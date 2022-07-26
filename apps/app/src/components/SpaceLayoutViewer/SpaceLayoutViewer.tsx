/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import type { FC } from "react";

import { useCopy } from "@lightdotso/app/hooks/useCopy";
import { useSpaceConfig } from "@lightdotso/app/hooks/useSpaceConfig";
import { useSpaceConfigLayout } from "@lightdotso/app/hooks/useSpaceConfigLayout";

export const SpaceLayoutViewer: FC = () => {
  const [isCopied, copy] = useCopy();
  const [config] = useSpaceConfig();
  const [configLayout] = useSpaceConfigLayout();
  const [host, setHost] = useState("");

  const router = useRouter();

  useEffect(() => {
    const host = window.location.host;
    setHost(host);
  }, [router.pathname]);

  const query = useMemo(() => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries({ ...config, ...configLayout })) {
      if (value != null) {
        searchParams.set(key, value);
      }
    }

    return searchParams.toString();
  }, [config, configLayout]);

  return (
    <>
      <div className="relative flex w-full rounded-md">
        <img className="absolute z-10" src={`/bazels/black.svg`} alt="black" />;
        <img
          className="absolute"
          src={`/lights/${configLayout.Light}.svg`}
          alt="black"
        />
        ;
        <img
          className="absolute z-30 overflow-hidden"
          src={`/spirals/${configLayout.Spiral}.svg`}
          alt="black"
        />
        ;
      </div>
      <div className="relative mt-12 flex justify-end space-x-2">
        <button
          className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-contrast-higher py-2 px-4 text-center text-sm font-medium leading-6 hover:bg-contrast-medium"
          onClick={(): void => {
            return copy(host + query);
          }}
        >
          {isCopied ? "Copied!" : "Copy Image URL"}
        </button>
      </div>
    </>
  );
};
