using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace backend.DTO.Requests;

public class AddExpertiseRequest
{
    public long UserId { get; set; }

    [JsonPropertyName("user_roles_id")]
    public long UserRolesId { get; set; }

    [Required]
    public string Runtime { get; set; } = string.Empty;

    [Required]
    public string Framework { get; set; } = string.Empty;

    [Required]
    public string Layer { get; set; } = string.Empty;

    [Required]
    public string Language { get; set; } = string.Empty;
}
