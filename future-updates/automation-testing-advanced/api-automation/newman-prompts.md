# Newman CLI Testing Prompts

## 1. Newman Command Generation

```
Generate Newman CLI commands for:

Collection: [COLLECTION_NAME]
Environment: [ENVIRONMENT_NAME]
Iterations: [NUMBER]
Reporters: [HTML/JSON/CLI]

Include:
- Basic execution command
- With environment variables
- With data file
- With reporters
- With folder selection
```

## Example Newman Commands

```bash
# Basic execution
newman run collection.json

# With environment
newman run collection.json -e environment.json

# With data file for data-driven testing
newman run collection.json -d data.csv

# With HTML reporter
newman run collection.json -r html --reporter-html-export report.html

# With multiple reporters
newman run collection.json -r cli,json,html

# Run specific folder
newman run collection.json --folder "User Tests"

# With iterations
newman run collection.json -n 5

# Complete example
newman run collection.json \
  -e production.json \
  -d testdata.csv \
  -n 3 \
  -r html,json \
  --reporter-html-export htmlResults.html \
  --reporter-json-export jsonResults.json
```

## Best Practices

1. **CI/CD Integration**: Use Newman in pipelines
2. **Reporting**: Generate HTML reports
3. **Data-Driven**: Use CSV/JSON data files
4. **Environment Management**: Separate environments
5. **Error Handling**: Check exit codes
