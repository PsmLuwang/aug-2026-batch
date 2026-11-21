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

export { create }