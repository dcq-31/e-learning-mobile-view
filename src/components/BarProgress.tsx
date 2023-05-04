interface IBarProgressProps {
  progress: number;
}

function BarProgress({ progress }: IBarProgressProps) {
  return (
    <div className="w-full rounded-full bg-gray-100 shadow-inner">
      <div
        className="rounded-full bg-secondary pt-1.5"
        style={{ width: progress + "%" }}
      />
    </div>
  );
}

export default BarProgress;
