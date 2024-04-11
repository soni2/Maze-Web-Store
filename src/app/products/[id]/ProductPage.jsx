"use client";

import { useState } from "react";

export function ProductPage({
  title,
  thumbnail,
  images,
  description,
  price,
  rating,
  stocks,
}) {
  const [thumb, setThumb] = useState(thumbnail);
  return <h1>products</h1>;
  //     <div className="bg-white pb-4 dark:bg-slate-900 dark:text-white">
  //       <div className="grid md:grid-cols-2 gap-6 xl:gap-12 items-start max-w-6xl px-4 mx-auto py-6 ">
  //         <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
  //           <div className="hidden md:flex items-start">
  //             <div className="grid gap-4">
  //               <h1 className="font-bold text-3xl">{title}</h1>
  //               <div className="flex items-center gap-4">
  //                 <div className="flex items-center gap-0.5">
  //                   {[...Array(5)].map((star, index) => {
  //                     const currentRating = index + 1;

  //                     return (
  //                       <StarIcon
  //                         key={index}
  //                         className={`${
  //                           currentRating <= rating
  //                             ? "text-yellow-400"
  //                             : "text-gray-300"
  //                         } h-5 w-5`}
  //                       />
  //                     );
  //                   })}
  //                 </div>
  //               </div>
  //               <div>
  //                 <p>{description}</p>
  //               </div>
  //             </div>
  //             <div className="text-4xl font-bold ml-auto">${price}</div>
  //           </div>
  //           {/* <form className="grid gap-4 md:gap-10">
  //           <div className="grid gap-2">
  //             <Label className="text-base" htmlFor="color">
  //               Color
  //             </Label>
  //             <RadioGroup className="flex items-center gap-2" defaultValue="black" id="color">
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="color-black"
  //               >
  //                 <RadioGroupItem id="color-black" value="black" />
  //                 Black
  //               </Label>
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="color-white"
  //               >
  //                 <RadioGroupItem id="color-white" value="white" />
  //                 White
  //               </Label>
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="color-blue"
  //               >
  //                 <RadioGroupItem id="color-blue" value="blue" />
  //                 Blue
  //               </Label>
  //             </RadioGroup>
  //           </div>
  //           <div className="grid gap-2">
  //             <Label className="text-base" htmlFor="size">
  //               Size
  //             </Label>
  //             <RadioGroup className="flex items-center gap-2" defaultValue="m" id="size">
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="size-xs"
  //               >
  //                 <RadioGroupItem id="size-xs" value="xs" />
  //                 XS
  //               </Label>
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="size-s"
  //               >
  //                 <RadioGroupItem id="size-s" value="s" />
  //                 S{"\n                            "}
  //               </Label>
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="size-m"
  //               >
  //                 <RadioGroupItem id="size-m" value="m" />
  //                 M{"\n                            "}
  //               </Label>
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="size-l"
  //               >
  //                 <RadioGroupItem id="size-l" value="l" />
  //                 L{"\n                            "}
  //               </Label>
  //               <Label
  //                 className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
  //                 htmlFor="size-xl"
  //               >
  //                 <RadioGroupItem id="size-xl" value="xl" />
  //                 XL
  //               </Label>
  //             </RadioGroup>
  //           </div>
  //           <div className="grid gap-2">
  //             <Label className="text-base" htmlFor="quantity">
  //               Quantity
  //             </Label>
  //             <Select defaultValue="1">
  //               <SelectTrigger className="w-24">
  //                 <SelectValue placeholder="Select" />
  //               </SelectTrigger>
  //               <SelectContent>
  //                 <SelectItem value="1">1</SelectItem>
  //                 <SelectItem value="2">2</SelectItem>
  //                 <SelectItem value="3">3</SelectItem>
  //                 <SelectItem value="4">4</SelectItem>
  //                 <SelectItem value="5">5</SelectItem>
  //               </SelectContent>
  //             </Select>
  //           </div>
  //           <Button size="lg">Add to cart</Button>
  //         </form>
  //         <Separator /> */}
  //           {/* <div className="grid gap-4 text-sm leading-loose">
  //             <p>
  //               Introducing the Acme Prism T-Shirt, a perfect blend of style and
  //               comfort for the modern individual. This tee is crafted with a
  //               meticulous composition of 60% combed ringspun cotton and 40%
  //               polyester jersey, ensuring a soft and breathable fabric that feels
  //               gentle against the skin.
  //             </p>
  //             <p>
  //               The design of the Acme Prism T-Shirt is as striking as it is
  //               comfortable. The shirt features a unique prism-inspired pattern
  //               that adds a modern and eye-catching touch to your ensemble.
  //             </p>
  //           </div> */}
  //         </div>
  //         <div className="grid gap-4">
  //           <img
  //             alt="Product Image"
  //             className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
  //             height={600}
  //             src={thumb}
  //             width={600}
  //           />
  //           <div className="hidden md:flex gap-4 items-start">
  //             {images?.map((image, index) => (
  //               <button
  //                 key={index}
  //                 className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
  //               >
  //                 <img
  //                   alt="Preview thumbnail"
  //                   className="aspect-square object-cover"
  //                   height={100}
  //                   src={image}
  //                   width={100}
  //                   onMouseEnter={() => setThumb(image)}
  //                 />
  //                 <span className="sr-only">View Image 4</span>
  //               </button>
  //             ))}
  //           </div>
  //         </div>
  //         <div className="grid gap-3 items-start order-1">
  //           <div className="flex md:hidden items-start">
  //             <div className="grid gap-4">
  //               <h1 className="font-bold text-2xl sm:text-3xl">{title}</h1>
  //               <div>
  //                 <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
  //               </div>
  //               <div className="flex items-center gap-4">
  //                 <div className="flex items-center gap-0.5">
  //                   <StarIcon className="w-5 h-5 fill-primary" />
  //                   <StarIcon className="w-5 h-5 fill-primary" />
  //                   <StarIcon className="w-5 h-5 fill-primary" />
  //                   <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
  //                   <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="text-4xl font-bold ml-auto">${price}</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="grid gap-6 md:gap-12 max-w-6xl px-4 mx-auto">
  //         <div className="grid gap-4">
  //           <div className="flex items-center gap-4">
  //             <h2 className="text-2xl font-bold">Customer Reviews</h2>
  //             {/* <Button size="sm" variant="outline">
  //             Write a Review
  //           </Button> */}
  //           </div>

  //           {/* Ratings */}
  //           <div className="grid gap-4">
  //             <div className="grid gap-2">
  //               <h3 className="text-lg font-semibold">Great fit and style</h3>
  //               <div className="flex items-center gap-2">
  //                 <div className="flex items-center gap-0.5">
  //                   <StarIcon className="w-4 h-4 fill-primary" />
  //                   <StarIcon className="w-4 h-4 fill-primary" />
  //                   <StarIcon className="w-4 h-4 fill-primary" />
  //                   <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
  //                   <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
  //                 </div>
  //                 <span className="text-muted">3 days ago</span>
  //               </div>
  //               <p>
  //                 The Acme Prism T-Shirt is a fantastic addition to my wardrobe.
  //                 The fabric is incredibly soft and comfortable, and the fit is
  //                 just perfect. I love the attention to detail in the design, and
  //                 the shirt adds a pop of style to any outfit. Highly recommended!
  //               </p>
  //             </div>
  //             <div className="grid gap-2 border-t pt-4">
  //               <h3 className="text-lg font-semibold">Love the design</h3>
  //               <div className="flex items-center gap-2">
  //                 <div className="flex items-center gap-0.5">
  //                   <StarIcon className="w-4 h-4 fill-primary" />
  //                   <StarIcon className="w-4 h-4 fill-primary" />
  //                   <StarIcon className="w-4 h-4 fill-primary" />
  //                   <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
  //                   <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
  //                 </div>
  //                 <span className="text-muted">1 week ago</span>
  //               </div>
  //               <p>
  //                 The Acme Prism T-Shirt is a fantastic addition to my wardrobe.
  //                 The fabric is incredibly soft and comfortable, and the fit is
  //                 just perfect. I love the attention to detail in the design, and
  //                 the shirt adds a pop of style to any outfit. Highly recommended!
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //         {/* <div className="grid gap-4">
  //           <h2 className="text-2xl font-bold">Product Details</h2>
  //           <div className="grid gap-2 text-sm leading-loose">
  //             <p>
  //               The Acme Prism T-Shirt is crafted with the perfect blend of style
  //               and comfort, making it an essential piece for fashion enthusiasts.
  //               The shirt features a modern and eye-catching design, with a unique
  //               prism-inspired pattern that adds a touch of sophistication to any
  //               ensemble.
  //             </p>
  //             <p>
  //               In addition to its stylish design, the Acme Prism T-Shirt is
  //               constructed with high-quality materials to ensure durability and
  //               long-lasting comfort. The shirt is made from a premium blend of
  //               combed ringspun cotton and polyester jersey, providing a soft and
  //               breathable feel against the skin.
  //             </p>
  //             <p>
  //               Whether you are dressing up for a casual day out or looking to
  //               elevate your streetwear style, the Acme Prism T-Shirt is the
  //               perfect choice. Its slim fit silhouette offers a flattering look,
  //               while the short sleeves provide a comfortable and unrestricted
  //               range of motion.
  //             </p>
  //           </div>
  //         </div> */}
  //         {/* <div className="grid gap-4">
  //         <h2 className="text-2xl font-bold">Related Products</h2>
  //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  //           <Card>
  //             <Link className="absolute inset-0 z-10 sm:[&:inset-0]" href="#">
  //               <span className="sr-only">View Product</span>
  //             </Link>
  //             <CardContent className="flex flex-col justify-end">
  //               <h3 className="font-bold text-sm">Acme Sunset Collection: Horizon Sneakers</h3>
  //               <p className="text-sm text-muted">$129</p>
  //             </CardContent>
  //             <img
  //               alt="Product Image"
  //               className="aspect-16/9 object-cover"
  //               height={200}
  //               src="/placeholder.svg"
  //               width={300}
  //             />
  //           </Card>
  //           <Card>
  //             <Link className="absolute inset-0 z-10 sm:[&:inset-0]" href="#">
  //               <span className="sr-only">View Product</span>
  //             </Link>
  //             <CardContent className="flex flex-col justify-end">
  //               <h3 className="font-bold text-sm">Acme Sunset Collection: Horizon Sneakers</h3>
  //               <p className="text-sm text-muted">$129</p>
  //             </CardContent>
  //             <img
  //               alt="Product Image"
  //               className="aspect-16/9 object-cover"
  //               height={200}
  //               src="/placeholder.svg"
  //               width={300}
  //             />
  //           </Card>
  //           <Card>
  //             <Link className="absolute inset-0 z-10 sm:[&:inset-0]" href="#">
  //               <span className="sr-only">View Product</span>
  //             </Link>
  //             <CardContent className="flex flex-col justify-end">
  //               <h3 className="font-bold text-sm">Acme Sunset Collection: Horizon Sneakers</h3>
  //               <p className="text-sm text-muted">$129</p>
  //             </CardContent>
  //             <img
  //               alt="Product Image"
  //               className="aspect-16/9 object-cover"
  //               height={200}
  //               src="/placeholder.svg"
  //               width={300}
  //             />
  //           </Card>
  //           <Card>
  //             <Link className="absolute inset-0 z-10 sm:[&:inset-0]" href="#">
  //               <span className="sr-only">View Product</span>
  //             </Link>
  //             <CardContent className="flex flex-col justify-end">
  //               <h3 className="font-bold text-sm">Acme Sunset Collection: Horizon Sneakers</h3>
  //               <p className="text-sm text-muted">$129</p>
  //             </CardContent>
  //             <img
  //               alt="Product Image"
  //               className="aspect-16/9 object-cover"
  //               height={200}
  //               src="/placeholder.svg"
  //               width={300}
  //             />
  //           </Card>
  //         </div>
  //       </div> */}
  //       </div>
  //     </div>
  //   );
  // }

  // function StarIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  //     </svg>
  //   );
}
