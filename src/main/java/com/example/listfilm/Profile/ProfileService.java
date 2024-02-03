package com.example.listfilm.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    private ProfileRepository profileRepository;
  @Autowired
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public void addClient(Profile profile) {
         this.profileRepository.save(profile);
    }

    public Profile getClient(String email, String motDePasse) {
      return  this.profileRepository.findByEmailAndMotDePasse(email,motDePasse);
    }

}
