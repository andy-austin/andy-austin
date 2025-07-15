# Enhanced Start Task Command Template - Next.js Profile Project

You are an AI assistant that helps developers start working on GitHub issues for this Next.js 14 profile project. Your goal is to streamline the transition from issue to active development while leveraging existing project context and creating comprehensive task documentation.

You will be given an issue URL or issue details. Here they are:

<issue_reference>
#$ISSUE_URL_OR_NUMBER
</issue_reference>

<repository_context>
Repository: #$REPO_URL
Current Branch: #$CURRENT_BRANCH
Local Status: #$GIT_STATUS
</repository_context>

## Project Context
This is a minimal Next.js 14 application using the App Router, designed for deployment to Vercel. The project follows modern Next.js conventions with a clean, minimal structure.

### Technology Stack
- **Frontend**: Next.js 14 with App Router
- **Runtime**: Node.js
- **Deployment**: Vercel
- **Linting**: ESLint
- **Package Manager**: npm

## TODO List

Follow these steps to start working on the task effectively:

### Phase 1: Issue Analysis & GitHub Context
- [ ] **🔗 Fetch the GitHub issue using the provided URL/number**
- [ ] **📋 Extract issue title, description, and acceptance criteria**
- [ ] **🏷️ Note assigned labels, milestones, and priority indicators**
- [ ] **👥 Identify issue author, assignees, and stakeholders**
- [ ] **💬 Review all comments and discussions for additional context**
- [ ] **🔗 Follow links to related issues, PRs, and dependencies**
- [ ] **📊 Assess complexity and estimated effort from issue details**
- [ ] **✅ Understand the problem statement and success criteria**
- [ ] **🎯 Identify the type of change (feature, bug fix, enhancement, etc.)**

### Phase 2: Next.js Project Analysis
- [ ] **📁 Review app/ directory structure (App Router)**
- [ ] **📄 Check layout.js for existing metadata and structure**
- [ ] **🔍 Examine page.js for current homepage implementation**
- [ ] **⚙️ Review next.config.js for any custom configuration**
- [ ] **📦 Check package.json for dependencies and scripts**
- [ ] **🎨 Identify styling approach (none currently - may need to add)**
- [ ] **🔧 Understand build and deployment process**
- [ ] **📊 Consider SEO and performance implications**

### Phase 3: Repository and Tech Stack Analysis
- [ ] **📖 Read README.md thoroughly** for project setup and architecture
- [ ] **🛠️ Extract technology stack (languages, frameworks, databases)**
- [ ] **📦 Identify dependencies and required development tools**
- [ ] **🎨 Note linting, formatting, and code quality tools**
- [ ] **🏗️ Understand project structure and module organization**
- [ ] **🔄 Ensure local repository is synced with main/master**
- [ ] **📋 Check for uncommitted changes requiring stash**
- [ ] **📝 Review contribution guidelines and coding standards**
- [ ] **🎯 Identify files/modules likely requiring modification**
- [ ] **🧪 Locate and understand the testing framework and patterns**

### Phase 4: Branch Management
- [ ] **🌿 Create feature branch with descriptive naming convention**
- [ ] **📝 Include issue number for traceability**
- [ ] **📤 Push branch to remote and set up tracking**
- [ ] **🔗 Link branch to issue (if supported by repository)**

### Phase 5: Development Environment Setup
- [ ] **🎯 PRIMARY: Follow README.md setup instructions exactly**
- [ ] **📦 Run `npm install` to install dependencies**
- [ ] **🏃 Start development server with `npm run dev`**
- [ ] **✅ Verify localhost:3000 loads correctly**
- [ ] **🧪 Run `npm run lint` to check code quality**
- [ ] **🏗️ Run `npm run build` to test production build**
- [ ] **🚀 Test `npm run start` for production mode**
- [ ] **🛠️ Configure additional development tools as needed**

### Phase 6: Task Documentation Creation
- [ ] **📝 Create task documentation with issue details**
- [ ] **📊 Break down issue into actionable subtasks**
- [ ] **🎯 Create development milestones and checkpoints**
- [ ] **⚠️ Identify potential challenges and technical risks**
- [ ] **🧪 Plan comprehensive testing strategy**
- [ ] **⏱️ Estimate time requirements for each development phase**
- [ ] **📋 Create progress tracking system**
- [ ] **🔄 Plan for Vercel deployment considerations**

## Enhanced Command Templates

### Git Workflow Commands
```bash
#!/bin/bash
# Enhanced git workflow for task startup

ISSUE_NUMBER="$1"
ISSUE_DESCRIPTION="$2"
BRANCH_TYPE="${3:-feature}"

echo "🚀 Starting enhanced task workflow for issue #$ISSUE_NUMBER"

# 1. Ensure clean working directory
echo "📋 Checking working directory status..."
git status
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Uncommitted changes detected. Stashing..."
    git stash push -m "Auto-stash before starting issue #$ISSUE_NUMBER $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 2. Update main branch
echo "🔄 Updating main branch..."
git checkout main
git pull origin main

# 3. Create and push feature branch
BRANCH_NAME="$BRANCH_TYPE/issue-$ISSUE_NUMBER-$ISSUE_DESCRIPTION"
echo "🌿 Creating branch: $BRANCH_NAME"
git checkout -b "$BRANCH_NAME"
git push -u origin "$BRANCH_NAME"

echo "✅ Git workflow complete!"
```

### Business Context Analysis Commands
```bash
#!/bin/bash
# Analyze business context from ai_context/docs

echo "📁 Analyzing business context from ai_context/docs..."

# 1. List all available domain documentation
echo ""
echo "🏢 Available business domain documentation:"
echo "================================================"
if [ -d "ai_context/docs" ]; then
    find ai_context/docs -name "*.md" -type f | sed 's|ai_context/docs/||' | sort | nl
else
    echo "⚠️  ai_context/docs directory not found"
    echo "📁 Creating ai_context/docs structure..."
    mkdir -p ai_context/docs
fi

# 2. Search for issue-relevant keywords
echo ""
echo "🔍 Analyzing relevance to current issue..."
echo "==========================================="

# Extract keywords from issue (you would replace these with actual issue analysis)
ISSUE_KEYWORDS="authentication user login security api endpoint"
echo "🎯 Searching for keywords: $ISSUE_KEYWORDS"

for keyword in $ISSUE_KEYWORDS; do
    echo ""
    echo "📋 Documents mentioning '$keyword':"
    if [ -d "ai_context/docs" ]; then
        grep -r -l -i "$keyword" ai_context/docs/ 2>/dev/null | sed 's|ai_context/docs/||' | sed 's/^/  ✓ /' || echo "  ❌ No matches found"
    fi
done

# 3. Show project structure for context
echo ""
echo "🏗️ Project structure overview:"
echo "=============================="
tree -L 3 -I 'node_modules|.git|dist|build|coverage' . 2>/dev/null || {
    echo "📊 Project layout:"
    ls -la | grep -E '^d' | awk '{print "  📁 " $9}' | grep -v '^\.$\|^\.\.$'
    echo ""
    echo "📄 Key files:"
    ls -la | grep -E '\.(md|json|yml|yaml|js|ts|py)$' | awk '{print "  📄 " $9}' | head -10
}
```

### Task Documentation Generator
```bash
#!/bin/bash
# Enhanced task documentation generator

ISSUE_NUMBER="$1"
ISSUE_TITLE="$2"
ISSUE_URL="$3"
BRANCH_NAME="$4"

# Ensure directory structure
mkdir -p ai_context/current_project

TASK_FILE="ai_context/current_project/task-${ISSUE_NUMBER}.md"

echo "📝 Creating comprehensive task documentation: $TASK_FILE"

cat > "$TASK_FILE" << 'EOF'
# Task #{ISSUE_NUMBER}: {ISSUE_TITLE}

## 📋 Issue Information
- **Issue Number:** #{ISSUE_NUMBER}
- **Issue Title:** {ISSUE_TITLE}
- **Issue URL:** {ISSUE_URL}
- **Branch:** {BRANCH_NAME}
- **Started:** {CURRENT_DATE}
- **Status:** 🟡 In Progress
- **Assignee:** [Your Name]
- **Estimated Effort:** TBD hours

## 🎯 Issue Analysis

### Problem Statement
<!-- Copy from GitHub issue -->
{PROBLEM_DESCRIPTION}

### Acceptance Criteria
<!-- Extract from GitHub issue -->
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

### Success Metrics
<!-- Define measurable outcomes -->
- Performance target: 
- User experience goal:
- Technical requirement:

## 🏢 Business Context

### Affected Business Domains
<!-- Review ai_context/docs and identify relevant domains -->
- [ ] **Domain 1:** [Name] - [Relevance to issue]
- [ ] **Domain 2:** [Name] - [Relevance to issue]
- [ ] **Domain 3:** [Name] - [Relevance to issue]

### Business Rules & Constraints
<!-- Extract from ai_context/docs -->
#### From [domain-doc-1.md]:
- **Rule 1:** [Description]
- **Rule 2:** [Description]

#### From [domain-doc-2.md]:
- **Constraint 1:** [Description]
- **Compliance requirement:** [Description]

### Cross-Domain Dependencies
- **Integration Point 1:** [Description]
- **Data Flow Impact:** [Description]
- **API Contract Changes:** [Yes/No - Details]

### Related Business Documentation
<!-- Link to specific files in ai_context/docs -->
- [ ] 📄 `ai_context/docs/[relevant-domain].md`
- [ ] 📄 `ai_context/docs/[related-area].md`
- [ ] 📄 `ai_context/docs/[integration-points].md`

## 🔧 Technical Analysis

### Technology Stack Assessment
**Primary Technologies:**
- Frontend: Next.js 14 with App Router
- Backend: Next.js API Routes (if needed)
- Database: None (minimal project)
- Testing: None configured (may need to add)

**Development Tools:**
- Build System: Next.js built-in
- Linting: ESLint (configured)
- Formatting: None configured (may need Prettier)
- Package Manager: npm

### Architecture Impact
**Components Affected:**
- [ ] App Router pages: [List]
- [ ] Layout components: [List]
- [ ] Client components: [List]
- [ ] Server components: [List]
- [ ] API routes: [List if needed]
- [ ] Static assets: [List]
- [ ] Metadata configuration: [Yes/No]

**Design Patterns:**
- Current pattern: [Description]
- Proposed changes: [Description]
- Consistency considerations: [Notes]

### Files to Modify
```
src/
├── components/
│   ├── [ComponentName].{ext}    # [Reason for change]
│   └── [AnotherComponent].{ext} # [Reason for change]
├── services/
│   └── [ServiceName].{ext}      # [Reason for change]
├── utils/
│   └── [UtilityName].{ext}      # [Reason for change]
└── types/
    └── [TypeDefinition].{ext}   # [Reason for change]

tests/
├── unit/
│   └── [TestFile].{ext}         # [New/Modified]
└── integration/
    └── [IntegrationTest].{ext}  # [New/Modified]

docs/
└── [Documentation].md           # [Updates needed]
```

## 📋 Implementation Plan

### Phase 1: Research & Design (Estimated: X hours)
- [ ] **Code Analysis** - Review existing implementation
  - [ ] Understand current architecture
  - [ ] Identify extension points
  - [ ] Review similar implementations
- [ ] **Design Solution** - Create technical specification
  - [ ] Define interfaces and contracts
  - [ ] Plan data structures
  - [ ] Design error handling strategy
- [ ] **Risk Assessment** - Identify potential challenges
  - [ ] Technical complexity risks
  - [ ] Integration complexity
  - [ ] Performance implications

### Phase 2: Core Implementation (Estimated: X hours)
- [ ] **Infrastructure Setup** - Prepare foundation
  - [ ] Create new modules/components
  - [ ] Set up configuration
  - [ ] Prepare development environment
- [ ] **Core Logic** - Implement main functionality
  - [ ] Implement business logic
  - [ ] Add input validation
  - [ ] Implement error handling
- [ ] **Integration** - Connect with existing systems
  - [ ] Update related components
  - [ ] Modify API contracts
  - [ ] Update data models

### Phase 3: Testing & Quality (Estimated: X hours)
- [ ] **Unit Testing** - Test individual components
  - [ ] Write comprehensive unit tests
  - [ ] Achieve >90% code coverage
  - [ ] Test edge cases and error conditions
- [ ] **Integration Testing** - Test component interactions
  - [ ] Write integration tests
  - [ ] Test API endpoints
  - [ ] Verify data flow
- [ ] **Manual Testing** - Validate user experience
  - [ ] Test happy path scenarios
  - [ ] Test error scenarios
  - [ ] Verify acceptance criteria

### Phase 4: Documentation & Deployment (Estimated: X hours)
- [ ] **Code Documentation** - Document implementation
  - [ ] Add inline code comments
  - [ ] Update API documentation
  - [ ] Document configuration options
- [ ] **User Documentation** - Update user-facing docs
  - [ ] Update README if needed
  - [ ] Create/update user guides
  - [ ] Update troubleshooting docs
- [ ] **Deployment Preparation** - Ready for production
  - [ ] Prepare deployment scripts
  - [ ] Update environment configurations
  - [ ] Plan rollback strategy

## 📊 Progress Tracking

### Daily Progress Log
#### {CURRENT_DATE}
- **Started:** Task initialization and analysis
- **Completed:** 
  - [x] Created task documentation
  - [x] Analyzed business context
  - [ ] Reviewed existing code
- **Next:** Begin Phase 1 research
- **Blockers:** None
- **Notes:** [Any observations or decisions]

#### [Date]
- **Focus:** [What you worked on]
- **Completed:** [Specific achievements]
- **Next:** [Next steps]
- **Blockers:** [Any issues encountered]
- **Notes:** [Important observations]

### Key Decisions Made
1. **[Date] - Decision Title**
   - **Context:** [Why decision was needed]
   - **Options Considered:** [Alternatives evaluated]
   - **Decision:** [What was chosen]
   - **Rationale:** [Why this option was selected]

### Blockers & Questions
- [ ] **Blocker 1:** [Description] - Status: [Open/Resolved]
- [ ] **Question 1:** [Description] - Answer: [TBD/Answered]

## 🧪 Testing Strategy

### Test Coverage Plan
**Unit Tests:**
- [ ] Core business logic functions
- [ ] Edge case handling
- [ ] Error condition responses
- [ ] Input validation

**Integration Tests:**
- [ ] API endpoint functionality
- [ ] Database interactions
- [ ] External service integration
- [ ] Component interactions

**Manual Testing Scenarios:**
- [ ] Happy path user journey
- [ ] Error handling user experience
- [ ] Performance under load
- [ ] Cross-browser compatibility (if applicable)

### Test Data Requirements
- **Test Database:** [Setup requirements]
- **Mock Data:** [What data is needed]
- **External Services:** [Mocking strategy]

### Performance Testing
- [ ] Load testing requirements
- [ ] Performance benchmarks
- [ ] Memory usage monitoring
- [ ] Response time targets

## ✅ Completion Criteria

### Definition of Done
- [ ] **Functionality Complete**
  - [ ] All acceptance criteria met
  - [ ] Feature works as specified
  - [ ] Error handling implemented
- [ ] **Quality Assurance**
  - [ ] Code review completed
  - [ ] All tests passing
  - [ ] Performance requirements met
  - [ ] Security review completed
- [ ] **Documentation Updated**
  - [ ] Code properly documented
  - [ ] User documentation updated
  - [ ] API documentation current
- [ ] **Deployment Ready**
  - [ ] No regressions detected
  - [ ] Deployment plan verified
  - [ ] Rollback plan prepared

### Sign-off Requirements
- [ ] **Technical Review** - Lead Developer approval
- [ ] **Business Review** - Product Owner validation
- [ ] **QA Review** - Quality assurance sign-off
- [ ] **Security Review** - Security team approval (if required)

## 📚 Resources & References

### GitHub Links
- **Issue:** {ISSUE_URL}
- **Branch:** [Link to branch]
- **Related Issues:** 
  - [#123 - Related issue](link)
  - [#456 - Dependency](link)
- **Related PRs:**
  - [#789 - Previous work](link)

### Documentation References
- **Business Context:** `ai_context/docs/[relevant-files]`
- **Technical Docs:** [Internal wiki/confluence links]
- **External Resources:** 
  - [Relevant blog posts](links)
  - [Official documentation](links)
  - [Stack Overflow discussions](links)

### Team Communication
**Key Discussions:**
- **[Date]:** Discussion about [topic] - Decision: [outcome]
- **[Date]:** Clarification on [requirement] - Resolution: [details]

**Stakeholder Updates:**
- **[Date]:** Progress update sent to [stakeholder]
- **[Date]:** Demo scheduled with [team]

## 🔄 Post-Completion Actions

### Knowledge Sharing
- [ ] Document lessons learned
- [ ] Update team knowledge base
- [ ] Share best practices discovered
- [ ] Update development guidelines if needed

### Follow-up Tasks
- [ ] Monitor production metrics
- [ ] Gather user feedback
- [ ] Plan any necessary refinements
- [ ] Schedule retrospective discussion

---
*Generated on {CURRENT_DATE} by Enhanced Task Command*
*Last Updated: {CURRENT_DATE}*
EOF

# Replace placeholders with actual values
sed -i "s/{ISSUE_NUMBER}/$ISSUE_NUMBER/g" "$TASK_FILE"
sed -i "s/{ISSUE_TITLE}/$ISSUE_TITLE/g" "$TASK_FILE"
sed -i "s/{ISSUE_URL}/$ISSUE_URL/g" "$TASK_FILE"
sed -i "s/{BRANCH_NAME}/$BRANCH_NAME/g" "$TASK_FILE"
sed -i "s/{CURRENT_DATE}/$(date '+%Y-%m-%d %H:%M:%S')/g" "$TASK_FILE"

echo "✅ Task documentation created: $TASK_FILE"
echo ""
echo "📝 Next steps:"
echo "   1. 🔗 Open and review the GitHub issue: $ISSUE_URL"
echo "   2. 📁 Review relevant business context in ai_context/docs/"
echo "   3. ✏️  Fill in the technical analysis sections"
echo "   4. 📋 Update the implementation plan with specific tasks"
echo "   5. 🚀 Begin Phase 1: Research & Design"
echo ""
echo "📄 Documentation file ready for editing!"
```

### README.md Analysis Integration
```bash
#!/bin/bash
# Comprehensive README analysis with business context

echo "📖 Comprehensive Project Analysis"
echo "=================================="

# 1. README.md Analysis
echo ""
echo "📋 README.md Setup Instructions:"
echo "================================="
if [ -f "README.md" ]; then
    # Extract setup sections with enhanced patterns
    echo "🔍 Extracting setup instructions..."
    
    # Look for setup/installation/development sections
    awk '
    /^#+.*([Ii]nstall|[Ss]etup|[Gg]etting [Ss]tarted|[Dd]evelopment|[Pp]rerequisites|[Qq]uick [Ss]tart|[Rr]unning|[Uu]sage)/ {
        found=1; print; next
    }
    found && /^#+/ && !/^#+.*([Ii]nstall|[Ss]etup|[Gg]etting [Ss]tarted|[Dd]evelopment|[Pp]rerequisites|[Qq]uick [Ss]tart|[Rr]unning|[Uu]sage)/ {
        found=0
    }
    found { print }
    ' README.md
    
    echo ""
    echo "🐳 Container Configuration Check:"
    echo "================================="
    
    # Enhanced Docker detection
    for compose_file in docker-compose.yml docker-compose.yaml compose.yml compose.yaml; do
        if [ -f "$compose_file" ]; then
            echo "✅ Found: $compose_file"
            echo "📋 Services configured:"
            grep -A 20 "^services:" "$compose_file" | grep -E "^  [a-zA-Z]" | sed 's/^/  🔹 /'
            break
        fi
    done
    
    if [ -f "Dockerfile" ]; then
        echo "🐳 Dockerfile found"
        echo "📋 Base image: $(grep -E "^FROM" Dockerfile | head -1)"
    fi
    
    [ ! -f "docker-compose.yml" ] && [ ! -f "docker-compose.yaml" ] && [ ! -f "compose.yml" ] && [ ! -f "compose.yaml" ] && [ ! -f "Dockerfile" ] && {
        echo "📦 No containerization detected - traditional setup required"
    }
    
else
    echo "⚠️  README.md not found!"
    echo "🔍 Looking for alternative documentation..."
    find . -maxdepth 2 -name "*.md" -type f | grep -E "(install|setup|getting|start)" | head -5
fi

# 2. Business Context Integration
echo ""
echo "🏢 Business Context Analysis:"
echo "============================"
if [ -d "ai_context/docs" ]; then
    echo "📁 Available business documentation:"
    find ai_context/docs -name "*.md" -type f | while read -r file; do
        echo "  📄 $(basename "$file" .md)"
        # Show first line of each doc for context
        head -1 "$file" 2>/dev/null | sed 's/^#* */  📝 /'
    done
else
    echo "📁 Creating ai_context/docs structure for business documentation..."
    mkdir -p ai_context/docs
    echo "💡 Recommendation: Add domain-specific documentation to ai_context/docs/"
fi

# 3. Development Environment Summary
echo ""
echo "🛠️  Development Environment Summary:"
echo "==================================="
echo "📋 Project Type Detection:"

# Detect project type
[ -f "package.json" ] && echo "  🟢 Node.js project detected"
[ -f "requirements.txt" ] || [ -f "pyproject.toml" ] && echo "  🐍 Python project detected"
[ -f "Gemfile" ] && echo "  💎 Ruby project detected"
[ -f "composer.json" ] && echo "  🐘 PHP project detected"
[ -f "go.mod" ] && echo "  🐹 Go project detected"
[ -f "Cargo.toml" ] && echo "  🦀 Rust project detected"
[ -f "pom.xml" ] || [ -f "build.gradle" ] && echo "  ☕ Java project detected"

echo ""
echo "🎯 CRITICAL SETUP REMINDERS:"
echo "  1. 📖 Follow README.md instructions EXACTLY"
echo "  2. 🏢 Review ai_context/docs for business context"
echo "  3. 🔧 Use project-specific commands only"
echo "  4. ❌ Do NOT use generic setup assumptions"
echo "  5. ✅ Verify everything works before coding"
```

## Master Setup Script
```bash
#!/bin/bash
# master-task-setup.sh - Complete task initialization

set -e

ISSUE_NUMBER="$1"
ISSUE_DESCRIPTION="$2"
ISSUE_URL="$3"
BRANCH_TYPE="${4:-feature}"

if [ -z "$ISSUE_NUMBER" ] || [ -z "$ISSUE_DESCRIPTION" ] || [ -z "$ISSUE_URL" ]; then
    echo "Usage: ./master-task-setup.sh <issue-number> <description> <issue-url> [branch-type]"
    echo "Example: ./master-task-setup.sh 123 'add-user-dashboard' 'https://github.com/org/repo/issues/123' feature"
    exit 1
fi

echo "🚀 Enhanced Task Setup - Issue #$ISSUE_NUMBER"
echo "=============================================="

# Phase 1: Git Workflow
echo ""
echo "🌿 Phase 1: Git Workflow Setup"
./git-workflow.sh "$ISSUE_NUMBER" "$ISSUE_DESCRIPTION" "$BRANCH_TYPE"

# Phase 2: Business Context Analysis
echo ""
echo "🏢 Phase 2: Business Context Analysis"
./business-context-analysis.sh

# Phase 3: Project Analysis
echo ""
echo "📖 Phase 3: Project & README Analysis"
./readme-analysis.sh

# Phase 4: Task Documentation
echo ""
echo "📝 Phase 4: Task Documentation Creation"
BRANCH_NAME="$BRANCH_TYPE/issue-$ISSUE_NUMBER-$ISSUE_DESCRIPTION"
./task-documentation.sh "$ISSUE_NUMBER" "Issue Title TBD" "$ISSUE_URL" "$BRANCH_NAME"

echo ""
echo "✅ Enhanced Task Setup Complete!"
echo "================================"
echo ""
echo "📋 Summary of what was created:"
echo "  🌿 Branch: $BRANCH_NAME"
echo "  📄 Task Documentation: ai_context/current_project/task-$ISSUE_NUMBER.md"
echo "  🏢 Business Context: Analyzed ai_context/docs/"
echo "  📖 Project Setup: README.md reviewed and documented"
echo ""
echo "🎯 Next Actions:"
echo "  1. 🔗 Review the GitHub issue: $ISSUE_URL"
echo "  2. 📝 Complete the task documentation with issue details"
echo "  3. 🏢 Review relevant business documentation in ai_context/docs/"
echo "  4. 🛠️  Follow the exact setup steps from README.md analysis"
echo "  5. 🚀 Begin development following the implementation plan"
echo ""
echo "📄 Open your task documentation:"
echo "   📝 ai_context/current_project/task-$ISSUE_NUMBER.md"
```

## Best Practices & Integration

### Business Context Integration
- **Mandatory Review**: Always check `ai_context/docs/` before starting
- **Domain Mapping**: Identify which business domains are affected
- **Rule Extraction**: Pull business rules into task documentation
- **Cross-Reference**: Link task docs to relevant business docs

### Task Documentation Standards
- **Comprehensive Coverage**: Include all analysis and planning
- **Living Document**: Update throughout development
- **Decision Recording**: Document all technical decisions
- **Progress Tracking**: Maintain detailed progress logs

### Quality Assurance
- **README First**: Always follow project-specific setup
- **No Assumptions**: Never use generic commands
- **Verification**: Ensure everything works before coding
- **Documentation**: Keep task docs current and accurate

This enhanced template provides a complete workflow that:
1. ✅ Fetches and analyzes GitHub issues thoroughly
2. ✅ Leverages your `ai_context/docs` business documentation
3. ✅ Creates comprehensive task documentation in `ai_context/current_project/`
4. ✅ Integrates with your existing project structure
5. ✅ Maintains project-specific setup approaches
6. ✅ Provides detailed progress tracking and decision recording