export enum Status {
  Online,
  Offline,
  DnD
}

type Props = {
  status: Status;
  sizePx: number;
};

const StatusDot: React.FC<Props> = ({ status, sizePx }) => {
  return (
    <span
      className={`absolute bottom-0 right-0 h-[${sizePx}px] w-[${sizePx}px] border-2 border-white rounded-full pointer-events-none ${
        status === Status.Online
          ? "bg-green-500"
          : status === Status.DnD
          ? "bg-red-500"
          : "bg-gray-500"
      }`}
    />
  );
};

export default StatusDot;
