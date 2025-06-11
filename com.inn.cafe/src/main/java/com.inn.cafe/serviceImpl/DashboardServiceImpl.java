package com.inn.cafe.serviceImpl;

import com.inn.cafe.dao.BillDao;
import com.inn.cafe.dao.CategoryDao;
import com.inn.cafe.dao.ProductDao;
import com.inn.cafe.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    CategoryDao categoryDao;

    @Autowired
    ProductDao productDao;

    @Autowired
    BillDao billDao;

    @Override
    public ResponseEntity<Map<String, Object>> getCount() {
        Map<String,Object> map = new HashMap<>();
        map.put("category",categoryDao.count());
        map.put("product", productDao.count());
        map.put("bill", billDao.count());
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Map<String, Object>>> getMonthlyRevenue() {
        List<Object[]> results = billDao.getMonthlyRevenue();
        List<Map<String, Object>> response = new ArrayList<>();

        for (Object[] row : results) {
            Map<String, Object> map = new HashMap<>();
            map.put("month", row[0]);
            map.put("revenue", row[1]);
            response.add(map);
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
