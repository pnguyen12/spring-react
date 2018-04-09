package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class BeerController {
    private BeerRepository repository;

    public BeerController(BeerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/good-beers")
    @CrossOrigin(origins = "http://localhost:3000")
    public Collection<Beer> goodBeers() {
        return repository.findAll().stream()
                .filter(this::isGreat)
                .collect(Collectors.toList());
    }

    @GetMapping("/bad-beers")
    @CrossOrigin(origins = "http://localhost:3000")
    public Collection<Beer> badBears() {
        return repository.findAll().stream().filter(this::isBad)
                .collect(Collectors.toList());
    }

    private boolean isGreat(Beer beer) {
        return !beer.getName().equals("Budweiser") &&
                !beer.getName().equals("Coors Light") &&
                !beer.getName().equals("PBR");
    }

    private boolean isBad(Beer beer) {
        return !beer.getName().equals("Kentucky Brunch Brand Stout") &&
                !beer.getName().equals("Good Morning") && !beer.getName().equals("Very Hazy") &&
                !beer.getName().equals("King Julius") && !beer.getName().equals("PBR");
    }
}