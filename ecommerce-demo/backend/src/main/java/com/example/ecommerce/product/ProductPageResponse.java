package com.example.ecommerce.product;

import java.util.List;

/** API response shape for a page of products. */
public record ProductPageResponse(
        List<ProductDto> content,
        int totalPages,
        long totalElements,
        int page,
        int size) {
}
