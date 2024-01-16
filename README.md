# Supnits-Classes Contribution Guidelines

Welcome to the Supnits-Classes repository! We appreciate your interest in contributing to our educational institute's website. Whether you're a developer, designer, or content creator, your contributions are valuable in enhancing the overall quality of our platform.

<p align="center">
  <img src="https://github.com/Anushka-Bhowmick/Supnits-Classes/assets/121785700/11214b55-7828-44bf-8fe4-f2a714aab095" alt="Supnits-Classes Image">
</p>

## Table of Contents
- [Getting Started](#getting-started)
  - [Fork the Repository](#fork-the-repository)
  - [Clone the Repository](#clone-the-repository)
- [Contribution Workflow](#contribution-workflow)
  - [Branching](#branching)
  - [Making Changes](#making-changes)
  - [Committing](#committing)
  - [Creating a Pull Request](#creating-a-pull-request)
- [Issues and Bugs](#issues-and-bugs)
- [Community and Communication](#community-and-communication)


## Getting Started

### Fork the Repository

To contribute, start by forking this repository. Click the "Fork" button at the top right corner of this page. This creates a copy of the repository in your GitHub account.

### Clone the Repository

Clone your forked repository to your local machine. Replace `<username>` with your GitHub username.

```bash
git clone https://github.com/<username>/Supnits-Classes.git
```

Now, you are ready to make your contributions.

## How to Run this project locally

1. Clone the project (How to clone👉)(https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)


2. Navigate to the cloned repository in your local system.

```bash
  cd <Project folder name>
```

3. Install dependencies

```bash
  npm install
```

4. Connect your mongoDb Database.

    i) Navigate to the server folder
   ii) Replace the part 'Your MongoDB instance' part with your MongoDB instance.
       For reference👉 https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/


5. Get your google client_id. 
   For reference👉 https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid

6. Navigate to the file index.ejs in client/template/views/

7. Replace 'YOUR GOOGLE CLIENT_ID' in 8th line
   with yoour google client_Id.


8. Start the server
Navigate to the server folder.
```
    cd ../../../server
```
9. Start nodemon.
```bash
  nodemon app.js
```
10. Open anhy browser :
    in address bar type -> localhost:3000/home 
    and hit enter!

Congratulations you have done it!! 🎉


## Contribution Workflow

### Branching

Create a new branch for your work. Choose a descriptive branch name related to the feature or fix you're working on.

```bash
git checkout -b feature/your-feature-name
```

### Making Changes

Make your changes in the local repository. Ensure that your contributions align with the project's goals and guidelines.

### Committing

Commit your changes with clear and concise commit messages. Reference any relevant issue numbers in your commits.

```bash
git add .
git commit -m "Your descriptive commit message closes #123"
```

### Creating a Pull Request

Push your changes to your forked repository, and then create a pull request from there. Provide a clear title and description of your changes. Mention the related issue numbers in the pull request description.

We will review your contribution, provide feedback, and merge it if everything looks good.


## Contributors ✨

Thanks goes to these wonderful people 💜
<table>
  <tr>
    <td align="center"><a href="https://github.com/Anushka-Bhowmick"><img src="https://avatars.githubusercontent.com/u/76967222?v=4" width="100px;" alt=""/><br /><sub><b>Anushka Bhowmick</b></sub></a><br /><a href="#maintenance-Tlazypanda" title="Maintenance">🚧✍️🖥️</a></td>
    <td align="center"><a href="https://github.com/Souvik34"><img src="https://avatars.githubusercontent.com/u/98397984?v=4" width="100px;" alt=""/><br /><sub><b>Souvik</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Debaditya-Som"><img src="https://avatars.githubusercontent.com/u/121785700?v=4" width="100px;" alt=""/><br /><sub><b>Debaditya Som</b></sub></a><br /><a  title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Soumojitshome2023"><img src="https://avatars.githubusercontent.com/u/121761154?v=4" width="100px;" alt=""/><br /><sub><b>Soumojit Shome</b></sub></a><br /> <a  title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/callmeVineeth"><img src="https://avatars.githubusercontent.com/u/130293688?v=4" width="100px;" alt=""/><br /><sub><b>Vineeth P V</b></sub></a><br /><a  title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ASHISH26940"><img src="https://avatars.githubusercontent.com/u/116710038?v=4" width="100px;" alt=""/><br /><sub><b>ASHISH GUPTA</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/AnitSarkar123"><img src="https://avatars.githubusercontent.com/u/135215478?v=4" width="100px;" alt=""/><br /><sub><b>Anit Sarkar</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/madhurima316"><img src="https://avatars.githubusercontent.com/u/145414858?v=4" width="100px;" alt=""/><br /><sub><b>madhurima316</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/deepbeatz"><img src="https://avatars.githubusercontent.com/u/79015311?v=4" width="100px;" alt=""/><br /><sub><b>Rajdeep Chowdhury</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Rick-03"><img src="https://avatars.githubusercontent.com/u/116449504?v=4" width="100px;" alt=""/><br /><sub><b>Satwick Mukherjee</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/IndraniSom"><img src="https://avatars.githubusercontent.com/u/121074944?v=4" width="100px;" alt=""/><br /><sub><b>Indrani Som</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/arghadipmanna101"><img src="https://avatars.githubusercontent.com/u/130065095?v=4" width="100px;" alt=""/><br /><sub><b>Arghadip Manna</b></sub></a><br /><a title="Code">💻</a></td>
  </tr>
  </table>

## Issues and Bugs

If you encounter any issues or bugs, please open an issue on the repository. Provide detailed information about the problem, steps to reproduce, and any relevant screenshots.

## Community and Communication

Follow these points during your contribution. We appreciate open and respectful communication.
- Always open an issue before contributing to the repository.
- Get yourself assigned before starting to work on an issue. Check if someone is already assigned for it.
- If there is inactivity from your side for quite some time, someone else will be given the chance.
- Be respectful towards the community.
- Mention the issue number on your PR.


Thank you for contributing to Supnits-Classes! ❤️
