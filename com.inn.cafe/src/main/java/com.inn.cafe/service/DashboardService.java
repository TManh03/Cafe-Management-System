package com.inn.cafe.service;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface DashboardService {

    ResponseEntity<Map<String,Object>> getCount();

    ResponseEntity<List<Map<String, Object>>> getMonthlyRevenue();
}
