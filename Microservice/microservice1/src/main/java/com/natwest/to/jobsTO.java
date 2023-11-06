package com.natwest.to;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="jobs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class jobsTO {
    @Id
    private String id;
    @Column
    private String userid;
    private String jobname;
}
