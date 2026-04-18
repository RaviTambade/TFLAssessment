interface PlaceholderProps {
  title: string;
}

const Placeholder = ({ title }: PlaceholderProps) => (
  <div className="min-h-screen flex items-center justify-center p-8">
    <h1 className="text-2xl font-bold text-muted-foreground">{title} (Coming Soon)</h1>
  </div>
);

export default Placeholder;
