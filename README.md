# Don App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary
- [Available Scripts](#available-scripts)
- [Contribution Guideline](#contribution-guideline)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Lints all files inside src/ with .ts or .tsx extensions. Useful for detecting errors according to the current configured ESLint and Prettier rules.

### `yarn lint:fix`

Lints all files inside src/ with .ts or .tsx extensions and **fix all possible errors**. Useful for detecting and fixing errors according to the current configured ESLint and Prettier rules.

## Contribution Guideline

### Create your feature branch
Check if you have the most recent commits on your local main branch (if needed use `git pull origin main`) and do:
```bash
git checkout -b <my-feature-branch>
```

### Develop your feature
Commit all desired changes with:
```bash
git add <filenames> # or use 'git add .' to add all modified files
git commit -m "Describe the applied changes here"
# Push your commits to the remote repository
git push origin -u <my-feature-branch>
```

### Make a Pull Request
If you have finished your contribution, it is time to open a pull request.
1. First of all, you need to ensure your feature branch is rebased onto the remote main branch (someone may have merged their branches while you were developing your own).
    ```bash
    # Update your local main branch
    git checkout main
    git pull origin main
    # Go to your feature branch and rebase it on main
    git checkout <my-feature-branch>
    git rebase main
    # Maybe here you will have to fix conflicts on some files
    ```
2. Then, open this repository page on your browser and go to the Pull Requests (PR) section. There you can create a pull request from your branch to the main branch and add some colleagues as reviewers.

3. Wait for some reviewers to verify your contribution and approve your PR (they must check if there is any sort of execution or functional error).

4. If you have enough approvals on your PR and your feature branch is still rebased on the most recent main commits (if not see steps below), you can merge your PR by selecting the option "Create merge commit".
    
    If your feature-branch is not rebased on main, follow these steps:
    ```bash
    # Update your local main branch
    git checkout main
    git pull origin main
    # Go to your feature branch and rebase it on main
    git checkout <my-feature-branch>
    git rebase main
    # Maybe here you will have to fix conflicts on some files
    # Push your rebased branch to the remote repository
    git push origin --force <my-feature-branch>
    ```
    Your Pull Request will automatically recognize your branch has been updated, and **you must re-request a review from your colleagues** so they can check if the rebase didn't lead to new errors.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
