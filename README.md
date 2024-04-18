# Install wdio
- `npm init wdio .`

# package.json
- check `type`: `module`

# tsconfig.json
- check `"module": "ESNext"`
- check `"resolveJsonModule": true`
- add `"esModuleInterop": true`
- change `"strict": false`

# wdio.conf.ts
- check `project: "./tsconfig.json"`
- add `${process.cwd()}/test/features/**/*.feature`
- add `./test/features/step-definitions/*.ts`

# Commands Used
- npx wdio wdio.conf.ts

# repl command
The command [npx wdio repl chrome] launches the WebDriverIO REPL (Read-Eval-Print Loop) for the Chrome browser.

# dotenv
Loads environment variables from .env file
1. npm install dotenv --save
2. import 'dotenv/config' //ES6
3. console.log(process.env)

# Install Chai assertion library
- $ npm install --save-dev chai
- npm install --save @types/chai

# Install allure command line to generate allure report

- npm install -g allure-commandline
- If allure report not seems to be working on vs code the chage the powershell script execution policy, open powershell with admin rights
  and then execute the following command:

  - Set-ExecutionPolicy RemoteSigned

- Restart your vs code
- check allure version: allure --version
- Execute the following command and generate the allure report:
  - allure serve

# NPM Commands

## Clean npm cache
- `npm cache clean --force`

## Remove node_modules and package-lock.json
- `rm -rf node_modules`
- `rm package-lock.json`

## Install dependencies again
- `npm install`

## Update WebDriverIO
- `npm install @wdio/cli@latest --save-dev`
- `npx wdio --version`

## Check node version
- `node -v`

## Reinstall Dependencies
- `rm -rf node_modules`
- `npm install -g ts-node@latest`

## File encoding check
- `file -i yourfile.ts`

## Usage:

command is used to inspect and determine the encoding of a file named `yourfile.ts`. This is particularly useful when working with text files, such as TypeScript files, as it helps ensure that the correct encoding is applied.

```bash
- file -i yourfile.ts

# Git Commands and Workflow


## Initial Setup

1. **Initialize a new Git repository:**
    ```bash
    git init
    ```

2. **Check the status of the repository:**
    ```bash
    git status
    ```

3. **Configure Git settings:**
    ```bash
    git config --list
    ```

4. **Add all changes to the staging area:**
    ```bash
    git add .
    ```

5. **Commit changes with a message:**
    ```bash
    git commit -m 'This is my initial commit'
    ```

6. **Add a remote repository as the origin:**
    ```bash
    git remote add origin https://github.com/sanjayspear/wdio-cucumber-e2e-test.git
    ```

7. **View remote repository information:**
    ```bash
    git remote -v
    ```
# Git Configuration Commands:

The provided commands configure the local Git repository to associate commits with a specific user email ("xay@gmail.com") and username ("abc") using the git config command.

1. git config --global user.email "xay@gmail.com"
2. git config --global user.name "abc"

# --local:

1. Scope: Applies only to the current Git repository.
2. Storage Location: The configuration settings are stored in the .git/config file within the specific repository.

Ex- git config --local user.email "xay@gmail.com"

# --global:

1. Scope: Applies globally to the user's entire system.
2. Storage Location: The configuration settings are stored in the user's home directory, typically in ~/.gitconfig

Ex- git config --global user.email "xay@gmail.com"

# Usage Recommendations:

1. Use --local when you want to configure settings for a specific repository. This is useful for customizing configurations on a per-project basis.
2. Use --global when you want to set configurations globally, applying them to all Git repositories on your system. This is often used for user-specific information, like email and name, that is consistent across projects.

# git pull and git fetch:

git pull and git fetch are both Git commands used to retrieve changes from a remote repository, but they have some key differences:

# git pull:

1. Purpose: Combines git fetch and git merge.
2. Operation: Fetches changes from the remote repository and automatically merges them into your current local branch.
3. Usage: git pull:

# git fetch

1. Purpose: Fetches changes from the remote repository but doesn't automatically merge them.
2. Operation: Downloads changes from the remote repository to your local repository, updating remote-tracking branches (e.g., origin/master).
3. Usage: git fetch
4. Merging: You need to explicitly merge the fetched changes into your local branch using git merge or git rebase.

# Key Differences:

1. Automatic Merge: git pull performs an automatic merge of the fetched changes into the current branch, while with git fetch, you have to manually merge the changes if desired.

2. Flexibility: git fetch is more flexible as it allows you to inspect changes before merging. It gives you control over when and how you want to integrate changes into your local branch.

# Using git pull
git pull

# Using git fetch and git merge
git fetch
git merge origin/your-branch-name

# Set local user email for the current repository
git config --local user.email "xay@gmail.com"

# Set global user email for all repositories
git config --global user.email "xay@gmail.com"

## Branching

8. **Create and switch to a new branch 'local':**
    ```bash
    git checkout -b local
    ```

9. **Switch to the 'master' branch:**
    ```bash
    git checkout master
    ```

10. **Switch to the 'local' branch:**
    ```bash
    git checkout local
    ```

11. **Display the list of branches:**
    ```bash
    git branch
    ```

## Pushing and Pulling

12. **Force push changes to the 'master' branch:**
    ```bash
    git push -f origin master
    ```

13. **Set up tracking for the 'master' branch:**
    ```bash
    git branch -u origin/master
    ```

14. **Check the status in a short and branch format:**
    ```bash
    git status -sb
    ```

15. **Fetch changes from the 'master' branch of the remote repository:**
    ```bash
    git fetch origin master
    ```

16. **Merge changes from the 'master' branch:**
    ```bash
    git merge origin/master
    ```

17. **Fetch updates from the remote repository:**
    ```bash
    git fetch origin
    ```

## Renaming and Adjusting

18. **Rename the local branch 'main' to 'master':**
    ```bash
    git branch -m main master
    ```

19. **Set the upstream branch for the 'master' branch:**
    ```bash
    git branch -u master master
    ```

20. **Set the remote repository's HEAD to the current branch:**
    ```bash
    git remote set-head origin -a
    ```
21.  Compare 'master' with 'local'

     git diff master local

22. The git merge command integrates changes from another branch into the current branch.

    git merge local


Feel free to adapt and customize these commands based on your specific project requirements.
