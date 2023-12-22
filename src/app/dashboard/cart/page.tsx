import { WidgetItem } from "@/components/WidgetItem";
import { Product, products } from "@/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";

export const metadata = {
    title: "Productos en el carrito",
    description: "Productos en el carrito",
};

interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
    const productsInCart: ProductInCart[] = [];

    for (const id of Object.keys(cart)) {
        const product = products.find((product) => product.id === id);
        if (product) {
            productsInCart.push({
                product,
                quantity: cart[id],
            });
        }
    }

    return productsInCart;
};

export default function CartPage() {
    const cookiesStore = cookies();
    const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {
        [id: string]: number;
    };
    const productsInCart = getProductsInCart(cart);

    const totalToplay = productsInCart.reduce(
        (prev, current) => current.product.price * current.quantity + prev,
        0
    );

    return (
        <div>
            <h1 className="text-5xl">Productos en el carrito</h1>
            <hr className="mb-2" />
            <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {productsInCart.map((item) => (
                        <ItemCard key={item.product.id} {...item} />
                    ))}
                </div>

                <div className="flex flex-col w-full sm:w-4/12 ">
                    <WidgetItem title="Total:">
                        <div className=" mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">
                                Total: ${(totalToplay * 1.19).toFixed(2)}
                            </h3>
                        </div>
                        <span className="block font-bold text-center text-gray-500">
                            Impuestos del IVA 19% $${(totalToplay * 0.19).toFixed(2)}
                        </span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    );
}
