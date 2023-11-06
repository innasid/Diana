package com.natwest.TO;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name ="jobs")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class JobTO {
    @Id
    private String id;
    @Column
    private String userid;
    private String Jobname;

}
