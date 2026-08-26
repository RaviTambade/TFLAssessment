package com.transflower.tflcomentor.fileio.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class RolePermissions {

    private int id;
    private String roleName;
    private int memberCount;
    private List<String> permissions;
    private String createdDate;
    private String status;
    private String description;
}