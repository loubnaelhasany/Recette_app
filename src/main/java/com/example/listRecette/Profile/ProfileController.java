package com.example.listRecette.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("Profile")
public class ProfileController {
    private ProfileService profileService;
    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }
    @PostMapping
    public void addClient(@RequestBody Profile profile){
        this.profileService.addClient(profile);
    }
    @GetMapping("/{email}/{motDePasse}")
    public Profile getClient(@PathVariable String email, @PathVariable String motDePasse){
        return profileService.getClient(email, motDePasse);
    }
    





}
