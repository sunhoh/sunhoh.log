
import { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

interface MdxProps {code: string; components?: MDXComponents}

export function Mdx({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Component
      components={{
        a: (props) => <a target="_blank" {...props} />,
        Image: (props) => (
          <Image
            className="max-h-[500px] w-full object-contain"
            {...props}
          />
        ),
        Callout: ({ children }: {
          children: ReactNode;
        }) => {
          return (
            <div
              className={`flex gap-4 px-6 py-5 rounded-lg my-6`}
            >
              {/* <Image
                className="m-0 mt-[2px] w-6 h-6"
                src={filename}
                alt="callout_icon"
                width={24}
                height={24}
              /> */}
              <div className="callout-content">{children}</div>
            </div>
          );
        },
        ...components,
      }}
    />
  );
}
