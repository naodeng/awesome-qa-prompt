# Self-Healing Test Scripts Prompts

## 1. Visual AI Element Detection

```
Implement visual AI for element identification:

Technology: [OpenCV/TensorFlow/AWS Rekognition]
Fallback Strategy: [Locator Hierarchy]

Features:
- Screenshot-based element finding
- Template matching
- Object detection
- OCR for text elements
- Confidence thresholds

Use Cases:
- Canvas elements
- Dynamic IDs
- Frequently changing UI
- Cross-browser differences
```

## 2. DOM Structure Learning

```
Create ML model to learn DOM patterns:

Training Data: [Historical Test Runs]
Model Type: [Decision Tree/Neural Network]

Learn:
- Common element attributes
- Hierarchical relationships
- Naming conventions
- Developer patterns

Predict:
- Best locator strategy
- Stable vs volatile attributes
- Backup locators
```

## Example: Visual Element Finder

```python
import cv2
import numpy as np
from selenium import webdriver

class VisualElementFinder:
    def __init__(self, driver):
        self.driver = driver
        self.template_cache = {}
    
    def find_by_image(self, template_path, threshold=0.8):
        # Take screenshot of current page
        screenshot = self.driver.get_screenshot_as_png()
        screenshot_array = np.frombuffer(screenshot, np.uint8)
        screen = cv2.imdecode(screenshot_array, cv2.IMREAD_COLOR)
        
        # Load template
        template = cv2.imread(template_path)
        
        # Match template
        result = cv2.matchTemplate(screen, template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        
        if max_val >= threshold:
            # Found match - calculate click coordinates
            h, w = template.shape[:2]
            center_x = max_loc[0] + w // 2
            center_y = max_loc[1] + h // 2
            
            # Click using coordinates
            action = ActionChains(self.driver)
            action.move_by_offset(center_x, center_y).click().perform()
            return True
        
        return False
    
    def find_by_text_ocr(self, text):
        # Use OCR to find text on page
        import pytesseract
        
        screenshot = self.driver.get_screenshot_as_png()
        screenshot_array = np.frombuffer(screenshot, np.uint8)
        screen = cv2.imdecode(screenshot_array, cv2.IMREAD_COLOR)
        
        # OCR
        data = pytesseract.image_to_data(screen, output_type=pytesseract.Output.DICT)
        
        for i, word in enumerate(data['text']):
            if text.lower() in word.lower():
                x = data['left'][i]
                y = data['top'][i]
                w = data['width'][i]
                h = data['height'][i]
                
                # Click center of text
                center_x = x + w // 2
                center_y = y + h // 2
                
                action = ActionChains(self.driver)
                action.move_by_offset(center_x, center_y).click().perform()
                return True
        
        return False
```

## Best Practices

1. **Performance**: Cache templates and results
2. **Thresholds**: Tune confidence scores per element
3. **Hybrid Approach**: Combine traditional + visual locators
4. **Training**: Continuously improve with test data
```
