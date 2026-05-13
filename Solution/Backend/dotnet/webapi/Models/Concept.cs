
namespace backend.Models;

using System;
using System.Collections.Generic;
public class Concept
{

    public static int count;
    public static int getCount(){
        return count;
    }

    public Concept()
    {
        count++;
    }
    public long Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string Status { get; set; } = null!;
    public DateTime CreatedAt { get; set; }


    //destrutor
    ~Concept()
    {
        count--;
        if(count < 0)
        {
            throw new ArgumentException("count can not be zero");
        }
    }
}
