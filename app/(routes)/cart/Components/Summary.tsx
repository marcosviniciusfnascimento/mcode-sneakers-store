"use client";
import Currency from "@/Components/Currency";
import Button from "@/Components/ui/Button";
import useCart from "@/hooks/userCart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Summary() {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pagamento efetuado com sucesso");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Algo deu errado!");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckOut = async () => {
    console.log("chamei");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Resumo do Pedido</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Valor Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckOut} className="w-full mt-6">
        Confirmar
      </Button>
    </div>
  );
}
