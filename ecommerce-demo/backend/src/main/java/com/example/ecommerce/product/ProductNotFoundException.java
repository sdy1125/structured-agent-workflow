package com.example.ecommerce.product;

/** Signals that an individual product does not exist. */
public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(Long id) {
        super("Product not found: " + id);
    }
}
