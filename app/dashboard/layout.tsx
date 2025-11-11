export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>DashboardLayout</div>
      {children}
    </div>
  );
}
