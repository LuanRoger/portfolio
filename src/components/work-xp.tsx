interface WorkXpProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function WorkXp({
  company,
  position,
  startDate,
  endDate,
  description,
}: WorkXpProps) {
  return (
    <li className="space-y-1">
      <div>
        <h2 className="font-bold text-lg">{company}</h2>
        <span className="inline-block text-muted-foreground">
          <p>
            {position}, {startDate} - {endDate}
          </p>
        </span>
      </div>
      <p>{description}</p>
    </li>
  );
}
