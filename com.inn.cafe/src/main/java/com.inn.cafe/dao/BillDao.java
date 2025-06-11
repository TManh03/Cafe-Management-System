package com.inn.cafe.dao;

import com.inn.cafe.POJO.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BillDao extends JpaRepository<Bill, Integer> {

    List<Bill> getAllBills();

    List<Bill> getBillByUserName(@Param("username") String username);

    @Query("SELECT FUNCTION('DATE_FORMAT', b.createdDate, '%Y-%m') as month, SUM(b.total) as revenue " +
            "FROM Bill b " +
            "GROUP BY FUNCTION('DATE_FORMAT', b.createdDate, '%Y-%m') " +
            "ORDER BY FUNCTION('DATE_FORMAT', b.createdDate, '%Y-%m')")
    List<Object[]> getMonthlyRevenue();
}
