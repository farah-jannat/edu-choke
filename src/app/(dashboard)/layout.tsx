export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-1/6 bg-slate-300">
        <div className="flex items-center gap-5">
          <img className="w-10 h-10" src="logo.png" alt="" />
          <h3 className="font-bold">EduChoke</h3>
        </div>
      </div>
      <div className="w-5/6 bg-slate-400">r</div>
    </div>
  );
}
