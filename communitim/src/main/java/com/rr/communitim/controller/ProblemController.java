package com.rr.communitim.controller;

import com.rr.communitim.model.Problem;
import com.rr.communitim.model.User;
import com.rr.communitim.service.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/problems")
public class ProblemController {
    private final ProblemService problemService;

    @Autowired
    public ProblemController(ProblemService problemService) {
        this.problemService = problemService;
    }

    @GetMapping()
    public List<Problem> getAllProblems(){
        return problemService.getMuseums();
    }
    @PostMapping(path="/add")
    public ResponseEntity postProblem(@RequestBody Problem problem){
        try{
            problemService.addNewProblem(problem);
            return new ResponseEntity(HttpStatus.OK);
        }catch(ResponseStatusException r){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

}
