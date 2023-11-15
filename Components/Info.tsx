"use client";
import { Product } from "@/types";
import Currency from "./Currency";
import Button from "./ui/Button";
import useCart from "@/hooks/userCart";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

export default function Info(props: InfoProps) {
  const { data } = props;
  const cart = useCart();
  return (
    <div>
      <h1 className="text-3xl font-bol text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-2xl tet-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Tamanho:</h3>
        <div className="">{data.size.name}</div>
      </div>
      <div className="flex items-center gap-x-4 mt-2">
        <h3 className="font-semibold text-black">Cores:</h3>
        <div
          className="h-6 w-6 rounded-full border border-gray-600"
          style={{ backgroundColor: data.color.value }}
        />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-3">
        <Button
          className="flex items-center gap-x-2"
          onClick={() => cart.addItem(data)}
        >
          Adicionar ao Carrinho
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
