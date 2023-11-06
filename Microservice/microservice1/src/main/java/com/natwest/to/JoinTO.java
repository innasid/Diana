package com.natwest.to;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="userprofile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class JoinTO {

    @Id
    private String userid;

    @Column
    private String fname;

    @OneToMany
    @JoinColumn(name ="userid")
    public List<jobsTO> list;

}
