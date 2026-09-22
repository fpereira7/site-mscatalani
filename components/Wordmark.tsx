import Image from "next/image";

type WordmarkProps = {
  className?: string;
  priority?: boolean;
};

export function Wordmark({ className = "", priority = false }: WordmarkProps) {
  return (
    <Image
      src="/brand/logo-horizontal.png"
      alt="MS Catalani Contabilidade"
      width={560}
      height={126}
      priority={priority}
      className={`h-10 w-auto md:h-11 ${className}`}
    />
  );
}
