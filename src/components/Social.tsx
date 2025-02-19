import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  icon: React.ReactNode;
};

const Social = ({ url, icon }: Props) => {
  return (
    <>
      {url && (
        <Link href={url} className="hover:translate-y-1" target="_blank" rel="noopener noreferrer">
          {icon}
        </Link>
      )}
    </>
  );
};

export default Social;
