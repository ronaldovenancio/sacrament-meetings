import { SignOutButton } from "@/components/sign-out-button";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mx-auto flex max-w-5xl justify-end px-6 pt-4">
        <SignOutButton />
      </div>

      {children}
    </>
  );
}
