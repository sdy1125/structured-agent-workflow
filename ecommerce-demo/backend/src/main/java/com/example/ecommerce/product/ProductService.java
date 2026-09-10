package com.example.ecommerce.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

/** Coordinates read-only product queries and maps entities to API DTOs. */
@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductPageResponse getProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());
        Page<ProductDto> products = productRepository.findAll(pageable).map(ProductDto::from);
        return new ProductPageResponse(
                products.getContent(),
                products.getTotalPages(),
                products.getTotalElements(),
                products.getNumber(),
                products.getSize());
    }

    public ProductDto getProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
        return ProductDto.from(product);
    }
}
