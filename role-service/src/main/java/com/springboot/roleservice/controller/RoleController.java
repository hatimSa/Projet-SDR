package com.springboot.roleservice.controller;

import com.springboot.roleservice.dto.RoleDto;
import com.springboot.roleservice.request.RoleRequest;
import com.springboot.roleservice.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @GetMapping
    public List<RoleDto> getAllRoles() {
        return roleService.getAllRoles();
    }

    @PostMapping
    public RoleDto createRole(@RequestBody RoleRequest request) {
        return roleService.createRole(request);
    }
}
