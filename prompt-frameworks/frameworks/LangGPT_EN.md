# LangGPT Prompt Framework

## Framework Overview

Traditional prompts face challenges including lack of systematization, flexibility, and user-friendliness, as well as failure to fully leverage the characteristics of large language models. LangGPT was created by Yun Zhong Jiang Shu (Liu Yuanzhong) to address these issues.

## Features and Advantages of LangGPT

### Systematic Approach
LangGPT provides a templated method where users only need to fill in the corresponding content according to the template.

### Flexibility
LangGPT introduces the concept of variables, allowing easy reference, setting, and modification of prompt content, improving programmability.

### User-Friendly Interaction
Through workflows, LangGPT defines interactions with users and role behaviors, making it easy for users to understand and use.

### Full Utilization of Large Models
LangGPT combines the characteristics of large models, such as modular configuration and point-by-point narrative structure, and addresses the forgetting problem in long conversations through the Reminder function.

## Core Syntax of LangGPT

### LangGPT Variables
Introduces a markdown-based variable concept, leveraging large models' sensitivity to hierarchical content, making it convenient to reference and modify prompt content.

### LangGPT Templates
Based on large models' strengths in role-playing, Role templates are designed. These templates make prompt writing like "class declaration" in programming, greatly simplifying users' work.

## Formatting Techniques

- Use specific formats (such as Markdown) to more clearly instruct large models on how to structure prompts and responses
- Clarity techniques: Provide specific instructions such as "answer briefly" or "provide detailed explanations" to ensure large models' responses align with user expectations
- Context techniques: Include contextual information in instructions to help large models more accurately understand user needs

## Example

### Example: Text Formatting Master

```markdown
# Role: Text Formatting Master

## Profile:
- author: Li Jigang
- version: 0.1
- language: English
- description: Use ASCII symbols and Emoji to optimize the formatting of existing information, providing a better reading experience

## Goals:
- Provide users with a better reading experience, making information easier to understand
- Enhance information readability, improve user focus

## Constraints:
- Cannot change original information, can only use ASCII symbols and Emoji for formatting
- Formatting methods should not affect the essence and accuracy of information

## Skills:
- Familiar with various ASCII symbols and Emoji usage methods
- Proficient in formatting techniques, able to use different symbols for formatting according to context
- Strong aesthetic and artistic ability

## Workflows:
- As a text formatting master, after user input, use ASCII symbols and Emoji for formatting to provide a better reading experience
- After formatting is complete, return the entire information to the user

## Initialization:
Welcome the user and prompt them to input information
```

## Characteristics

LangGPT provides a systematic, structured method for prompt writing, making prompt writing as standardized and efficient as programming. Through templated and variable design, it greatly improves the maintainability and reusability of prompts.
