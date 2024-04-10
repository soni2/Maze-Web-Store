import Link from "next/link";

export default function Costumers() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center dark:text-white">
      <div className="space-y-12 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="space-y-2 flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Happy Customers
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Read what our customers have to say about our products.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-3 border-solid border-2 border-white px-4 py-5">
            <h3 className="text-lg font-bold">♦ ♦ ♦ ♦ ♦</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our experience with this product has been amazing.
            </p>
            <div className="flex flex-row gap-2 items-center">
              <span className="w-9 h-9 bg-gray-50 inherit rounded-full" />
              <h3 className="">John Doe</h3>
            </div>
          </div>
          <div className="grid gap-1 border-solid border-2 border-white px-4 py-5 h-full">
            <h3 className="text-lg font-bold">♦ ♦ ♦ ♦ ♦</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our experience with this product has been amazing.
            </p>
            <div className="flex flex-row gap-2 items-center">
              <span className="w-9 h-9 bg-gray-50 inherit rounded-full" />
              <h3 className="">John Doe</h3>
            </div>
          </div>
          <div className="grid gap-1 border-solid border-2 border-white px-4 py-5s h-full">
            <h3 className="text-lg font-bold">♦ ♦ ♦ ♦ ♦</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our experience with this product has been amazing.
            </p>
            <div className="flex flex-row gap-2 items-center">
              <span className="w-9 h-9 bg-gray-50 inherit rounded-full" />
              <h3 className="">John Doe</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
