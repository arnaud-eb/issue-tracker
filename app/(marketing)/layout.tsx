export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>MarketingLayout</div>
      {children}
    </div>
  );
}
