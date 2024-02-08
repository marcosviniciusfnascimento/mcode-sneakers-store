import { cn } from "@/lib/utils";

interface FooterProps {
  isCinema?: boolean;
}
export default function Footer({ isCinema = false }: FooterProps) {
  return (
    <footer className={cn("bg-white border-t", isCinema && "bg-card")}>
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} Loja Demonstrativa. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
