# REST Assured Testing Prompts

## 1. REST Assured Test Class

```
Generate a REST Assured test class for:

API: [API_NAME]
Base URL: [URL]
Authentication: [TYPE]
Endpoints: [LIST_ENDPOINTS]

Include:
- Setup and configuration
- Authentication handling
- Request specifications
- Response validation
- Test methods for each endpoint
```

## Example REST Assured Test

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class UserAPITest {
    
    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "https://api.example.com";
        RestAssured.basePath = "/v1";
    }
    
    @Test
    public void testGetUser() {
        given()
            .header("Authorization", "Bearer token")
            .pathParam("id", 123)
        .when()
            .get("/users/{id}")
        .then()
            .statusCode(200)
            .body("id", equalTo(123))
            .body("name", notNullValue())
            .body("email", containsString("@"));
    }
}
```

## Best Practices

1. **BDD Style**: Use given-when-then
2. **Request Specs**: Reuse request specifications
3. **Response Specs**: Reuse response specifications
4. **Logging**: Enable request/response logging
5. **Serialization**: Use POJOs for request/response
