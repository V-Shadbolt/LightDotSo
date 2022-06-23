import { ApiLinks } from "@lightdotso/const";
import type { FC } from "react";
import { useMemo } from "react";

import { NextImage } from "@lightdotso/app/components/NextImage";
import { splitAddress } from "@lightdotso/app/utils/splitAddress";

type ModalShareImageProps = {
  address?: string;
  name: string;
};

export const ModalShareImage: FC<ModalShareImageProps> = ({
  address,
  name,
}) => {
  const slug = useMemo(() => {
    return name ?? splitAddress(address);
  }, [address, name]);

  return (
    <>
      <div className="relative">
        <NextImage
          height={630}
          width={1200}
          useBlur={false}
          src={`${ApiLinks.OGP}=${slug}`}
          className="aspect-[630/1200] w-full h-52 sm:h-64 rounded-md shadow-md"
          alt="Share"
        />
      </div>
    </>
  );
};
