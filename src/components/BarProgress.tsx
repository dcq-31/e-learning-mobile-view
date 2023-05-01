interface IBarProgressProps {
  progress: number;
}

function BarProgress({ progress }: IBarProgressProps) {
  return (
    <div className="w-full rounded-full bg-gray-100">
      <div
        className="rounded-full bg-gray-800 pt-1.5"
        style={{ width: progress + "%" }}
      />
    </div>
  );
}

export default BarProgress;
