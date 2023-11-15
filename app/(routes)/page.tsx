import Billboard from "@/Components/Billboard";
import ProductList from "@/Components/ProductList";
import Container from "@/Components/ui/Container";
import getBillboard from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("0ad00b9a-c0ca-4845-a5b3-2af4b1c8f28b");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produtos em destaque" items={products} />
        </div>
      </div>
    </Container>
  );
}
