const toneStyles: Record<string, string> = {
  coral: "from-[#ff8a7a] via-[#ffb597] to-[#ffe3c9]",
  ocean: "from-[#2d7ff9] via-[#57a7ff] to-[#b8dbff]",
  forest: "from-[#1f6a4f] via-[#2f8b67] to-[#b6d6c7]",
  sun: "from-[#f28f3b] via-[#f3bd56] to-[#f9e6a7]",
  stone: "from-[#5f6873] via-[#8a94a0] to-[#d9dee4]",
  berry: "from-[#9e2c5e] via-[#d65c8a] to-[#f5bdd0]",
};

type TonePreviewProps = {
  tone: string;
  className?: string;
};

const TonePreview = ({ tone, className = "" }: TonePreviewProps) => {
  const gradient = toneStyles[tone] ?? toneStyles.stone;

  return (
    <div
      className={`rounded-2xl bg-gradient-to-br ${gradient} ${className}`}
      aria-hidden="true"
    />
  );
};

export default TonePreview;
