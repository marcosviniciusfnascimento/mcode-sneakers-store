"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
}

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function Currency(props: CurrencyProps) {
  const { value } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="font-semibold">
      {currencyFormatter.format(Number(value))}
    </div>
  );
}
