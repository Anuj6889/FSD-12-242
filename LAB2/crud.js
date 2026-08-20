import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  const parsed = JSON.parse(data);
  return Array.isArray(parsed) ? parsed : [];
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addToCart = async (product) => {
  const myCart = await getCart();
  const isFound = myCart.find((item) => item.id === product.id);
  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }
  await saveCart(myCart);
  console.log(`product added/updated with id ${product.id} into cart`);
};

const showCart = async () => {
  const data = await getCart();
  console.table(data);
  let total = 0;
  total = data.reduce((acc, item) => acc + item.price * item.qty, 0);
  console.log("Total amount to pay:", total);
};

const removeFromCart = async (id) => {
  const data = await getCart();
  const count = data.length;
  console.log("Items in cart:", count);
};

const countTotal = async () => {
  const data = await getCart();
  let total = 0;
  total = data.reduce((acc, item) => acc + item.price * item.qty, 0);
  console.log("Total amount to pay:", total);
}
const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Flipkart 🤸");
    console.log("1.......... Show cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Checkout");
    choice = await cin.question("Enter your choice:");
    switch (Number(choice)) {
      case 1:
        await showCart();
        break;
      case 2:
        let data = await cin.question("Enter id,name,price,qty:");
        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());
        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };
        await addToCart(product);

        break;
      case 3:
        {
          let idInput = await cin.question("Enter product id to remove:");
          const id = Number(idInput.trim());
          const myCart = await getCart();
          const idx = myCart.findIndex((item) => item.id === id);
          if (idx === -1) {
            console.log(`Product with id ${id} not found`);
          } else {
            const removed = myCart.splice(idx, 1)[0];
            await saveCart(myCart);
            console.log(
              `Removed product ${removed.name} (id ${removed.id}) from cart`
            );
          }
        }
        break;
      case 4:
        console.log("Update product quantity");
        break;
      case 5:
        console.log("See you later");
        break;
      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != 5);
  cin.close();
};

main();