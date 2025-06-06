package com.springboot.roleservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Role extends BaseEntity {
    @Column(nullable = false, unique = true)
    private String name;
}
