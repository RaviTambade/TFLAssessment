import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")

public class LayersController {

@GetMapping("/layers")
    public List<Layer> getAllLayers() {
        return conceptsService.getAllLayers();
    }
    
}
