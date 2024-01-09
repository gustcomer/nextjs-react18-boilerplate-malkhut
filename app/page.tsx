import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-12">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold tracking-tight sm:text-6xl">
            Start your Application Right Now With Ease
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            This App is really incredible and it&apos;s going to make your life
            a lot easier
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
