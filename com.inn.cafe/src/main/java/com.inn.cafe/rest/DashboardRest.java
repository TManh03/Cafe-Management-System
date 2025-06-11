package com.inn.cafe.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequestMapping(path = "/dashboard")
public interface DashboardRest {

    @GetMapping(path = "/details")
    ResponseEntity<Map<String,Object>> getCount();

    @GetMapping(path = "/monthly-revenue")
    ResponseEntity<List<Map<String, Object>>> getMonthlyRevenue();
}
