import Image from "next/image";

/**
 * Official Kriate wordmark (includes the orange square).
 * Use the black version on light backgrounds, white on dark.
 * Source assets supplied by the brand and trimmed into /public.
 */
export default function Logo({
  className = "h-6 w-auto",
  variant = "black",
  priority = false,
}: {
  className?: string;
  variant?: "black" | "white";
  priority?: boolean;
}) {
  return (
    <Image
      src={`/kriate-wordmark-${variant}.png`}
      alt="Kriate"
      width={1804}
      height={309}
      priority={priority}
      className={className}
    />
  );
}
