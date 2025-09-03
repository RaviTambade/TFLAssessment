package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Question;
import com.example.demo.services.QuestionInterface;


@RestController
public class QuestionController{
private final QuestionInterface qb;

    public QuestionController(QuestionInterface qb)
    {
        this.qb=qb;
    }

    @GetMapping("/ques")
    public ArrayList<Question>getAll()
    {
        return qb.getAll();
    }

    @PostMapping("/ques")
    public String insert(@RequestBody Question q)
    {
        if(qb.insert(q)){
            return "inserted";
        }
        return "failed";
    }

    @PutMapping("/ques/{id}")
    public String update(@PathVariable("id") int idToBeUpdate,@RequestBody Question q)
    {
        if(qb.update(idToBeUpdate,q))
        {
            return "update";
        }
        return "not update";
    }

    @DeleteMapping("/ques/{id}")
    public String delete(@PathVariable("id") int idToBeDelete)
    {
        if(qb.delete(idToBeDelete))
        {
            return "delete";
        }
        return "not delete";
    }

}