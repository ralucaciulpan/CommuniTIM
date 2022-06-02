package com.rr.communitim.service;

import com.rr.communitim.model.Problem;
import com.rr.communitim.model.User;
import com.rr.communitim.repository.ProblemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProblemService {

    private ProblemRepository problemRepository;

    public ProblemService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    public Problem addNewProblem(Problem problem){
        Problem addedProblem;
        if(problem.getCategory() != null && problem.getSubcategory()!=null) {
            addedProblem=problemRepository.save(problem);
            return addedProblem;
        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Something went wrong");
    }

    public List<Problem> getMuseums() {
        return problemRepository.findAll();
    }
}
