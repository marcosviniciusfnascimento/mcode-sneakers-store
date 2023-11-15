import Info from "@/Components/Info";
import ProductList from "@/Components/ProductList";
import Gallery from "@/Components/gallerys";
import Container from "@/Components/ui/Container";
import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";

interface ProductPageProps {
  params: {
    productid: string;
  };
}
export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const product = await getProduct(params.productid);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Itens relacionados" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
