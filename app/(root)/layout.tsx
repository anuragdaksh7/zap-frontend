export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      {children}
      <div className="hidden status-running status-error status-cancelled status-paused status-completed" />
    </main>
  );
}