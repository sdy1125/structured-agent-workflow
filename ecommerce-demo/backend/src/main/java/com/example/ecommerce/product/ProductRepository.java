package com.example.ecommerce.product;

import org.springframework.data.jpa.repository.JpaRepository;

/** Provides read access to persisted products. */
public interface ProductRepository extends JpaRepository<Product, Long> {
}
