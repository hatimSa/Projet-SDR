package com.springboot.roleservice.controller;

import com.springboot.roleservice.dto.RoleDto;
import com.springboot.roleservice.request.RoleRequest;
import com.springboot.roleservice.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/role")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;
    private final ModelMapper modelMapper;

    @GetMapping("/getAll")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<RoleDto>> getAllRoles() {
        var roles = roleService.getAllRoles()
                .stream()
                .map(role -> modelMapper.map(role, RoleDto.class))
                .collect(Collectors.toList());
        return ResponseEntity.ok(roles);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<RoleDto> getRoleById(@PathVariable Long id) {
        var role = roleService.getRoleById(id);
        var roleDto = modelMapper.map(role, RoleDto.class);
        return ResponseEntity.ok(roleDto);
    }

    @PostMapping("/save")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<RoleDto> saveRole(@Valid @RequestBody RoleRequest request) {
        var roleEntity = roleService.createRole(request);
        var roleDto = modelMapper.map(roleEntity, RoleDto.class);
        return ResponseEntity.ok(roleDto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<RoleDto> updateRole(@PathVariable Long id, @Valid @RequestBody RoleRequest request) {
        var updatedRole = roleService.updateRole(id, request);
        var roleDto = modelMapper.map(updatedRole, RoleDto.class);
        return ResponseEntity.ok(roleDto);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteRole(@PathVariable Long id) {
        roleService.deleteRoleById(id);
        return ResponseEntity.noContent().build();
    }
}