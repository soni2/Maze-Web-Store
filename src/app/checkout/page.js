export default function page() {
  return (
    <>
      {/* <header className="flex items-center justify-between bg-gray-100 px-6 py-4 shadow-sm dark:bg-gray-800">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="text-lg">Acme Store</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link className="relative" href="#">
            <ShoppingCartIcon className="h-6 w-6" />
            <Badge className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </Badge>
          </Link>
          <Avatar>
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="container mx-auto my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Cart</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px] hidden md:table-cell">Image</TableHead>
                    <TableHead className="max-w-[150px]">Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden md:table-cell">
                      <img
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">Acme Hoodie</TableCell>
                    <TableCell>
                      <Select defaultValue="2">
                        <SelectTrigger className="w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>$49.99</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Button size="icon" variant="outline">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="hidden md:table-cell">
                      <img
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">Acme T-Shirt</TableCell>
                    <TableCell>
                      <Select defaultValue="1">
                        <SelectTrigger className="w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>$24.99</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Button size="icon" variant="outline">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>Subtotal</div>
                <div>$74.98</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Shipping</div>
                <div>$5.00</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <div>Total</div>
                <div>$79.98</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Place Order
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping & Billing</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="First Last" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="m@example.com" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="123 Main St, Anytown USA" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment">Payment Method</Label>
                <RadioGroup className="flex items-center gap-4" defaultValue="card" id="payment">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="card">
                    <RadioGroupItem id="card" value="card" />
                    <CreditCardIcon className="h-5 w-5" />
                    Card
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="paypal">
                    <RadioGroupItem id="paypal" value="paypal" />
                    <WalletCardsIcon className="h-5 w-5" />
                    PayPal
                  </Label>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </div>
      </main> */}
    </>
  );
}
