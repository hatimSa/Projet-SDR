package com.springboot.roleservice.service;

import com.springboot.roleservice.dto.RoleDto;
import com.springboot.roleservice.model.Role;
import com.springboot.roleservice.repository.RoleRepository;
import com.springboot.roleservice.request.RoleRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public List<RoleDto> getAllRoles() {
        return roleRepository.findAll().stream()
            .map(role -> RoleDto.builder().id(role.getId()).name(role.getName()).build())
            .collect(Collectors.toList());
    }

    public RoleDto createRole(RoleRequest request) {
        Role role = Role.builder().name(request.getName()).build();
        Role saved = roleRepository.save(role);
        return RoleDto.builder().id(saved.getId()).name(saved.getName()).build();
    }
}
