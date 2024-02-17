import Link from "next/link";

export default function Costumers() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Customer Ratings & Reviews
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See what our customers have to say about our products.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Product 1</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Rating: 4.5 | Reviews: 120
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Product 2</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Rating: 4.8 | Reviews: 98
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Product 3</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Rating: 4.2 | Reviews: 150
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contact Sales
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
