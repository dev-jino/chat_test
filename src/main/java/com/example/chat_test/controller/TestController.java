package com.example.chat_test.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api")
public class TestController {
    @PostMapping(value = "/testData")
    public Map<Integer, String> testData(@RequestBody List<String> params) {
        Map<Integer, String> data = new HashMap<>();
        data.put(1,"사과");
        data.put(2,"포도");
        data.put(3,"바나나");

        int i = 4;
        for (String param : params) {
            data.put(i, param);
        }

        return data;
    }
}
