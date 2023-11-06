package com.natwest.to;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserProfileTO {

    private String userid;

    private  String pass;
    private String fname;
    private String userstatus;

}

