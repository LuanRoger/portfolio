interface AnimatedIconLabelProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export default function IconLabel({
  children,
  icon,
}: AnimatedIconLabelProps) {
  return (
    <div className="inline-flex gap-1 items-center">
      <span>{icon}</span>
      {children}
    </div>
  );
}
