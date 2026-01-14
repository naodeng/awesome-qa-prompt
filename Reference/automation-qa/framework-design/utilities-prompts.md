# Framework Utilities Prompts

## 1. Configuration Manager

```
Create a configuration management utility for:

Framework: [FRAMEWORK_NAME]
Configuration Sources: [PROPERTIES/YAML/JSON/ENV_VARS]
Settings to Manage:
- Base URL
- Browser type
- Timeouts
- Environment
- Credentials (encrypted)

Include:
- Configuration loading
- Environment-specific configs
- Default values
- Validation
```

## Example Config Manager (Java)

```java
public class ConfigManager {
    private static Properties properties;
    
    static {
        try {
            properties = new Properties();
            FileInputStream fis = new FileInputStream("src/main/resources/config.properties");
            properties.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public static String getProperty(String key) {
        return properties.getProperty(key);
    }
    
    public static String getBaseUrl() {
        return getProperty("base.url");
    }
    
    public static String getBrowser() {
        return getProperty("browser");
    }
}
```

## Best Practices

1. **Centralized Config**: Single source of truth
2. **Environment Support**: Dev, staging, production configs
3. **Security**: Encrypt sensitive data
4. **Defaults**: Provide sensible defaults
5. **Validation**: Validate configuration on load
