import ProductCard from "../component/ProductList/ProductCard";
import { render, screen } from "@testing-library/react";
import { PRODUCT_MOCK } from "../mocks/product.json";
import "@testing-library/jest-dom";

it("Should have a product title name", () => {
    async () => {
        render(
            <ProductCard product={PRODUCT_MOCK} />
        );
        const title = await screen.getByText("WD 2TB Elements Portable External Hard Drive - USB 3.0 ");
        console.log(title);
        expect(title).toBeInTheDocument();
    }
})