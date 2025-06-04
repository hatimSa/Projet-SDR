package com.springboot.roleservice.service;

import com.springboot.roleservice.exc.NotFoundException;
import com.springboot.roleservice.model.Role;
import com.springboot.roleservice.repository.RoleRepository;
import com.springboot.roleservice.request.RoleRequest;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;
    private final ModelMapper modelMapper;

    public Role createRole(RoleRequest request) {
        Role role = modelMapper.map(request, Role.class);
        return roleRepository.save(role);
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Role getRoleById(Long id) {
        return findRoleById(id);
    }

    public Role updateRole(Long id, RoleRequest request) {
        Role existingRole = findRoleById(id);
        modelMapper.map(request, existingRole);
        return roleRepository.save(existingRole);
    }

    public void deleteRoleById(Long id) {
        Role toDelete = findRoleById(id);
        roleRepository.delete(toDelete);
    }

    protected Role findRoleById(Long id) {
        return roleRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Role not found"));
    }
}