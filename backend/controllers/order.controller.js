const create = (req, res) => {
  const { name, price, qty } = req.body;

  const responseObj = {
    orderId: new Date().getTime(),
    name,
    price,
    qty,
    total: parseFloat(price) * parseInt(qty)
  }

  res.status(201).json({
    success: true,
    message: "Order completed",
    data: responseObj
  })
}


const getAllOrders = (req, res) => {
  const orders = [{ name: "item 1" }, { name: "item 2" }, { name: "item 3" }];

  res.status(200).json({
    success: true,
    message: "Fetched all orders details.",
    orders
  })
}


export { create, getAllOrders }