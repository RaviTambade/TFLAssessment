using System.ComponentModel.DataAnnotations;
namespace Transflower.TFLAssessment.Entities;
public class Product {
    public int Id{get;set;}
    public string Title{get;set;}
    public string Description {get;set;}
    public decimal UnitPrice{get;set;}
    public int Balance{get;set;}
}