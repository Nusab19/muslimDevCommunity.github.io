const Header = ({
  children,
  lineWidth = "w-1/2",
}: {
  children?: React.ReactNode;
  lineWidth?: string;
}) => {
  // Determine the effective class - use lineWidth but ensure it's not smaller than w-64
  const effectiveWidth = lineWidth.includes("w-")
    ? `min-w-64 ${lineWidth}`
    : "min-w-64 w-1/2";

  return (
    <h2 className="md:mb-20 mb-14 text-center text-3xl font-semibold text-foreground md:text-4xl">
      {children}
      <span
        className={`mx-auto md:mt-5 mt-3 block h-[1px] ${effectiveWidth} bg-gradient-to-r from-neutral-900/0 via-blue-500 to-neutral-900/0`}
      ></span>
    </h2>
  );
};

export default Header;
