import { Apple, Box } from "lucide-react";
import type { ComponentProps } from "react";
import type { VMOS } from "@/lib/types";

export const WindowsIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3,12V3.5L12,2V12H3ZM3,21V12H12V22L3.5,21ZM12,2V12H21V2L12,3.5V2ZM12,22V12H21V21L12,22Z" />
  </svg>
);

export const OsIcon = ({ os, ...props }: { os: VMOS } & ComponentProps<"svg">) => {
    switch (os) {
        case 'windows':
            return <WindowsIcon {...props} />;
        case 'macos':
            return <Apple {...props} />;
        case 'ubuntu':
            return <Box {...props} />;
    }
};
