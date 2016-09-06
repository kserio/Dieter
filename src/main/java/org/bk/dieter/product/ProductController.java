package org.bk.dieter.product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * Created by redi on 05.04.2016.
 */
@RestController
public class ProductController {

    public static final Logger LOG = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public
    @ResponseBody
    Iterable<Product> product() {
        return productRepository.findAll();
    }

    @RequestMapping(value = "/product", method = RequestMethod.POST)
    public
    @ResponseBody
    Product saveProduct(@RequestBody Product product) {
        LOG.info("saving product: " + product);
        return productRepository.save(product);
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    Product getProduct(@PathVariable("id") long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            return product.get();
        }
        return null;
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.PUT)
    public
    @ResponseBody
    void putProduct(@PathVariable("id") long id, @RequestBody Product product) {
        productRepository.save(product);
    }
}
