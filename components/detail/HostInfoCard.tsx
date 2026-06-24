type HostInfoCardProps = {
  hostName: string;
  hostYears: number;
};

const HostInfoCard = ({ hostName, hostYears }: HostInfoCardProps) => {
  return (
    <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#f6f8fb] p-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9dfe7] text-sm font-semibold text-[#394454]">
        {hostName.slice(0, 1)}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#1f2630]">Anfitrion: {hostName}</p>
        <p className="text-xs text-[#5f6b7b]">{hostYears} anos como anfitrion</p>
      </div>
    </div>
  );
};

export default HostInfoCard;
