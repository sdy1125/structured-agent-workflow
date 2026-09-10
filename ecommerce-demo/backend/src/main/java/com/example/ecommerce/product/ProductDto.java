package com.example.ecommerce.product;

/** Public product representation returned by the read-only API. */
public record ProductDto(
        Long id,
        String name,
        Long price,
        String imageUrl,
        String category,
        String description) {

    public static ProductDto from(Product product) {
        return new ProductDto(
                product.getId(),
                product.getName(),
                product.getPrice(),
                product.getImageUrl(),
                product.getCategory(),
                product.getDescription());
    }
}
