package com.inn.cafe.POJO;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;
import java.time.LocalDateTime;

@NamedQuery(name = "Bill.getAllBills", query = "select b from Bill b order by b.id desc")

@NamedQuery(name = "Bill.getBillByUserName", query = "select b from Bill b where b.createdBy=:username order by b.id desc")

@Data
@Entity
@DynamicUpdate
@DynamicInsert
@Table(name = "bill")
public class Bill implements Serializable {

    private static final long sericalVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "uuid")
    private String uuid;

    @Column(name = "paymentmethod")
    private String paymentMethod;

    @Column(name = "total")
    private Integer total;

    @Column(name = "productdetails", columnDefinition = "json")
    private String productDetail;

    @Column(name = "createdby")
    private String createdBy;

    @Column(name = "tablenumber")
    private String tableNumber;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    @CreationTimestamp
    @Column(name = "createddate", updatable = false)
    private LocalDateTime createdDate;

}
