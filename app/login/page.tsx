import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to manage sacrament meeting programs.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-12">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Sacrament Meeting Planner
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Sign In
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            Sign in to create, edit, and manage sacrament meeting programs.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
}
