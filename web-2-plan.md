# Web 2 Plan

1. Architecture - Finalize the architecture and determine key features.
   * Custodial wallet
   * Social Layer - 3rd party library/framework? Bare minimum features?
   * How much of our architecture should be on-chain? For example, Ceramic Network?
2. Techstack - Determine the key libraries/frameworks/standards we are going to use. Subsequently all minor packages should be vetted to prevent bloating. Also refer to [Evaluations](https://app.gitbook.com/s/WRDeUrObaA13VsSQHEBO/evaluations "mention").  The following list is not exhaustive.
   * UI library - Deciding the styling standard, CSS/SASS or CSS-in-JS, as well as the library.&#x20;
   * Frontend and Backend Framework - Node or Deno&#x20;
   * Ethereum library - Ethers.js or Web3.js
   * Login System - Password-less?
   * Database - SQL or Non-SQL
3. Data structures - Evaluate the datas we need and determine the data structures we are going with on the backend.
4. TDD\*/Unit tests - Do we need unit tests on both frontend and backend? (Are we going with TDD? )
5. Devops\* - Create development environment. Integrate repositories with Gitbook and KanbanFlow. Discord integration? (Due to our current circumstances, I doubt we are going with full devops. But I believe we are at least doing partial devops like CI/CD. )
6. Project Structures - Setup project skeleton along with key libraries/frameworks/standards. Vertical slice?
7. Task Breakdown - Breakdown the MVP features into development tasks and dump it on KanbanFlow.
8. Development - Start actual development.
