package com.natwest.to;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userprofile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserProfileTO {
    @Id
    private String userid;
    @Column
    private  String pass;
    private String fname;
    private String userstatus;

}
