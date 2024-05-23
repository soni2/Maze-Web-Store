import CostumerCard from "./CostumerCard";

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
        <CostumerCard />
      </div>
    </section>
  );
}
