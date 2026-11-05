import CurrentDate from "./CurrentDate";

export default function Header() {
  return (
    <header className="border-b bg-white px-6 py-4 print:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <p className="text-xl font-semibold text-slate-900">
            Study Ward
          </p>

          <CurrentDate />
        </div>
      </div>
    </header>
  );
}