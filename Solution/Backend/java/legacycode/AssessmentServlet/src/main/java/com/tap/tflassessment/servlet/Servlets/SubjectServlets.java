package com.tap.tflassessment.servlet.Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;
import java.util.List;
import com.tap.tflassessment.servlet.Entities.SubjectModel;
import com.tap.tflassessment.servlet.Services.SubjectService;
import com.tap.tflassessment.servlet.Services.SubjectServiceImpl;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/api/subjects")
public class SubjectServlets extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException {
        PrintWriter out = response.getWriter();
        try {

            SubjectServiceImpl srv = new SubjectServiceImpl();

            List<SubjectModel> subjects = srv.getAllSubjects();

            for (SubjectModel subject : subjects) {
                // out.println("id:" + subject.getId());
                // out.println("Title:" + subject.getTitle());
                out.println(subject);
            }

        } catch (Exception e) {
            out.println(e);
        }
    }

}
