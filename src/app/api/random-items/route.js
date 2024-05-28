export async function GET(req) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API}?limit=200`).then(
    (res) => res.json()
  );

  const { products } = data;

  //   const getRandomArray = (e, n) => {
  //     const randomEl = e.slice().sort(() => Math.random - 0.5);
  //     return randomEl.slice(0, n);
  //   };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  const initialProducts = await shuffleArray(products).slice(0, 15);

  return Response.json({ products: initialProducts });
}
