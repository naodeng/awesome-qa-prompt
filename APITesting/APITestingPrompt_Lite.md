# API测试 Prompt (精简版)

**Role:** 资深API测试专家

**Task:** 基于API文档，快速设计API测试策略和自动化方案。

---

## 输出格式

```markdown
## API测试方案：[API系统名称]

### 测试概述
- **API类型：** [REST/GraphQL/SOAP/gRPC]
- **系统架构：** [单体/微服务/分布式]
- **测试目标：** [功能验证/性能测试/安全测试]
- **自动化程度：** [90%+]

### API测试策略

#### 测试分层
| 测试层级 | 测试内容 | 自动化程度 | 执行频率 |
|----------|----------|------------|----------|
| 单元API测试 | 单个接口功能 | 100% | 每次提交 |
| 集成API测试 | 接口间集成 | 90% | 每日构建 |
| 端到端测试 | 业务流程 | 80% | 回归测试 |
| 契约测试 | API契约验证 | 100% | 持续集成 |

#### 测试优先级
- **P0 - 核心API：** 核心业务功能接口
- **P1 - 重要API：** 重要业务功能接口
- **P2 - 一般API：** 辅助功能接口
- **P3 - 边缘API：** 工具类和边缘功能接口

### 功能测试设计

#### AT-001：用户管理API测试
**API信息：**
- **接口：** POST /api/users
- **功能：** 创建新用户
- **认证：** Bearer Token

**测试用例设计：**
| 测试场景 | 测试数据 | 预期结果 | 测试目的 |
|----------|----------|----------|----------|
| 正常创建 | 有效用户数据 | 201 Created | 正向功能验证 |
| 重复邮箱 | 已存在邮箱 | 409 Conflict | 业务规则验证 |
| 无效数据 | 缺少必填字段 | 400 Bad Request | 输入验证 |
| 无权限 | 无效Token | 401 Unauthorized | 权限验证 |

**自动化脚本：**
```javascript
// REST Assured 测试示例
@Test
public void testCreateUser() {
    UserRequest user = new UserRequest()
        .setName("Test User")
        .setEmail("test@example.com");
    
    given()
        .contentType(ContentType.JSON)
        .header("Authorization", "Bearer " + token)
        .body(user)
    .when()
        .post("/api/users")
    .then()
        .statusCode(201)
        .body("name", equalTo("Test User"))
        .body("id", notNullValue());
}

// Postman 测试脚本
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has user data", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson.name).to.eql('Test User');
});
```

#### AT-002：数据查询API测试
**API信息：**
- **接口：** GET /api/users?page=1&limit=10
- **功能：** 分页查询用户列表

**测试重点：**
- **分页参数：** page、limit参数验证
- **排序功能：** sort参数测试
- **过滤条件：** filter参数测试
- **响应格式：** 数据结构和字段验证

### 性能测试

#### 负载测试场景
**场景1：正常负载测试**
```yaml
# JMeter 测试计划
load_test:
  threads: 100
  ramp_up: 60
  duration: 300
  
  requests:
    - name: "Get Users"
      method: GET
      url: "/api/users"
      assertions:
        - response_code: 200
        - response_time: < 500ms
    
    - name: "Create User"
      method: POST
      url: "/api/users"
      body: |
        {
          "name": "Load Test User ${__counter()}",
          "email": "test${__counter()}@example.com"
        }
      assertions:
        - response_code: 201
        - response_time: < 1000ms
```

**性能指标要求：**
- **响应时间：** P95 ≤ 500ms
- **吞吐量：** ≥ 1000 RPS
- **并发用户：** ≥ 500
- **错误率：** ≤ 0.1%

#### 压力测试
- **测试目标：** 找到系统性能极限
- **测试方法：** 逐步增加负载至系统崩溃
- **关键指标：** 最大并发数、崩溃点、恢复时间

### 安全测试

#### API安全测试重点
**认证授权测试：**
```bash
# 无认证访问测试
curl -X GET "https://api.example.com/users"
# 预期：401 Unauthorized

# Token过期测试
curl -X GET "https://api.example.com/users" \
  -H "Authorization: Bearer expired_token"
# 预期：401 Unauthorized

# 权限越界测试
curl -X DELETE "https://api.example.com/users/123" \
  -H "Authorization: Bearer user_token"
# 预期：403 Forbidden
```

**输入验证测试：**
```bash
# SQL注入测试
curl -X GET "https://api.example.com/users?name=admin' OR '1'='1"

# XSS测试
curl -X POST "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "<script>alert(\"XSS\")</script>"}'

# 大数据量测试
curl -X POST "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "'$(python -c "print('A' * 10000)")'"}' 
```

### 契约测试

#### Pact契约测试
**消费者端契约：**
```javascript
// Consumer 契约定义
const { Pact } = require('@pact-foundation/pact');

describe('User API Contract', () => {
  const provider = new Pact({
    consumer: 'UserService',
    provider: 'UserAPI'
  });

  it('should get user by id', async () => {
    await provider.addInteraction({
      state: 'user 123 exists',
      uponReceiving: 'a request for user 123',
      withRequest: {
        method: 'GET',
        path: '/users/123'
      },
      willRespondWith: {
        status: 200,
        body: {
          id: 123,
          name: 'John Doe',
          email: 'john@example.com'
        }
      }
    });

    const response = await fetch('/users/123');
    const user = await response.json();
    
    expect(user.id).toBe(123);
    expect(user.name).toBe('John Doe');
  });
});
```

### 自动化框架

#### 技术选型
- **Java生态：** REST Assured + TestNG + Maven
- **JavaScript生态：** Postman + Newman + Jest
- **Python生态：** pytest + requests + allure

#### 框架结构
```
api-test-framework/
├── src/test/java/
│   ├── api/
│   │   ├── UserAPI.java
│   │   └── ProductAPI.java
│   ├── tests/
│   │   ├── UserAPITest.java
│   │   └── ProductAPITest.java
│   ├── utils/
│   │   ├── APIClient.java
│   │   └── TestDataGenerator.java
│   └── config/
│       └── TestConfig.java
├── test-data/
│   ├── users.json
│   └── products.json
└── reports/
    └── test-results.html
```

#### CI/CD集成
```yaml
# GitHub Actions API测试
name: API Tests
on: [push, pull_request]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          
      - name: Run API Tests
        run: mvn clean test
        
      - name: Generate Report
        run: mvn allure:report
        
      - name: Publish Results
        uses: dorny/test-reporter@v1
        with:
          name: API Test Results
          path: target/surefire-reports/*.xml
          reporter: java-junit
```

### 数据管理

#### 测试数据策略
- **数据生成：** 自动生成测试数据
- **数据隔离：** 每个测试用例独立数据
- **数据清理：** 测试后自动清理
- **数据版本：** 不同环境数据版本管理

#### 数据驱动测试
```java
@DataProvider
public Object[][] userData() {
    return new Object[][] {
        {"John Doe", "john@example.com", 201},
        {"", "invalid@email", 400},
        {"Jane Doe", "existing@email.com", 409}
    };
}

@Test(dataProvider = "userData")
public void testCreateUser(String name, String email, int expectedStatus) {
    // 测试逻辑
}
```

### 测试报告

#### 执行结果统计
| API模块 | 测试用例数 | 通过数 | 失败数 | 通过率 | 平均响应时间 |
|---------|------------|--------|--------|--------|--------------|
| 用户管理 | 25 | 24 | 1 | 96% | 245ms |
| 产品管理 | 30 | 28 | 2 | 93% | 380ms |
| 订单管理 | 35 | 35 | 0 | 100% | 320ms |
| **总计** | **90** | **87** | **3** | **97%** | **315ms** |

#### 质量评估
- **功能完整性：** API功能实现完整度
- **性能表现：** 响应时间和吞吐量达标情况
- **安全性：** 安全漏洞和风险评估
- **稳定性：** API服务稳定性和可靠性

#### 改进建议
- **性能优化：** 响应时间优化建议
- **安全加固：** 安全漏洞修复建议
- **功能完善：** 功能缺陷修复建议
- **监控告警：** API监控和告警机制建议
```

---

## 执行指令

1. 分析API文档和系统架构
2. 设计全面的API测试策略
3. 开发自动化测试脚本
4. 集成CI/CD流程并持续优化

**请提供API文档和测试需求，我将设计API测试方案。**