# Ospin Front-End Code Challenge

We are excited to be taking the next steps with you as a candidate! Our team has prepared a straight forward code challenge for you to complete. We value your time, and while you are free to spend as much time on the challenge as you wish, we have designed this to be completed _within two hours_.


---
## Overview

Provided is a simplified version of an old OSPIN React application. The application features a sidebar which uses React Router to navigate, and is complete with several views and a whole bunch of classic 20th century art. Also provided is a minimal testing set up, which should be all green when starting out.

As we expect to rapidly grow this application within a mean extreme programming machine, we want to make sure we have some sort of graceful error handling page for our clients when we goof up. After all, when you are in the middle of growing a new liver with a bioprocessing device controlled by a web app, you can't just have a blank screen show up if you encounter an error!

We would like to provide our users with an experience similar to these pages:

**A GitLab implementation**
<div align="center">
  <img src="gitlab_500.png" style="width: 50%">
</div>

**A GitHub implementation**
<div align="center" style="margin-top: 10px">
  <img src="github_500.jpeg" style="width: 50%">
</div>


---
## Getting Started
- clone the repository - **do not fork!** This is to ensure your submission stays private. If you will be hosting the repo on Github or Gitlab (not mandatory, see FAQ), please rename the repository.
- make sure you are using a node version that is compatible with what is defined in the `package.json`
- run `npm i && npm test` followed by `npm start` to make sure everything is working as expected!


---
## Deliverables
- **when an error is thrown in a component within the main-content section of `Main.jsx` (e.g. `Profile`, `Notifications`, `Devices`, `Changelog`):**
  - an error view should display
  - the sidebar should still be visible
  - the user should be able to navigate away from the error page using the sidebar (the error page should only take up the 'main-content' window of the application)
  - we want to report the client side error to our backend, so make use of the existing method in the `ServerAPI` class to simulate the relevant information being sent in a POST request. Simply calling the provided method is sufficient - no need to make to make an actual HTTP request!
  - the url should reflect that a user is on the error page (e.g. `http://localhost:3000/error`)
  - when the user reloads the browser window when on `/error` they should see the error screen after the reload
  - the user should be able to successfully 'navigate back' in their browsers (by clicking the back button, hitting backspace, etc.)
  - **test coverage should be provided for this new feature!**
  - **bonus:** provide the user with the option to see the actual error and the stack trace on the error page (unless the user has reloaded into the error screen using the browser's reload button. In this case you don't need to display the error and stack trace)

## Hints
  - The router should be responsible for the rendering of the error screen (there should be a route to the error screen)
  - for the bonus: the history API allows passing state between routes

---
## FAQ

**Q**: What do I do once I am finished?
**A**: **Please do not make a PR to the repo.** If you are able to host it on a Github account simply rename the repo, provide a link and it will be cloned. If you made your repo private, please invite github user `ospin-webapp` as a collaborator, let us know when you are finished, and it will be cloned. Otherwise, send an email to webdev.ospin@gmail.com either with your finished repo zipped and attached, or with a link to somewhere it can be downloaded.

**Q:** Re: the user experience, do I have to provide some fancy animations/art/etc. on the error page?
**A:** No! All you need to provide is what you consider a simple and polished view. There are some assets in `src/images` which you are welcome to use, but not required to. Feel free to be goofy with it!

**Q:** May I use dependencies not currently listed?
**A:** Of course! Please use whatever dependencies you see fit. While we have provided a test framework in the challenge, it is by no means necessary to use the same one.

**Q:** May I change the way existing code works?
**A:** Certainly - feel free to edit the repository as you see fit. Keep in mind that your work should reflect how you would go about solving this issue on a real team.

**Q:** Will you be reviewing Git history?
**A:** Yes! Please provide a structured and readable Git history. This should mimic a real feature + PR completion, and will be read as such.

**Q:** How much test coverage do I need to provide?
**A:** Use your best judgement depending on your time constraints. If it is a choice between 20 tests which cover 50% of the feature, vs. 5 tests which cover 95% of the feature, go for the higher coverage!


**Q:** What if I have additional questions about the feature/user experience?
**A:** First and foremost, if it is not blocking to your completion of the code challenge, feel free to list any assumptions you need to make in the discussion section of the README below. Otherwise, reach out directly if you have any questions that feel are blocking to the completion of this code challenge.

---
## Discussion
> This is your space to communicate your thoughts as a developer to us. Use this section to describe the decisions you made (architecturally, technically, etc.), as well as any recommendations for alterations/extensions to the feature. Consider what makes a for a stellar PR body and provide it here.

> If there are any assumptions you had to make because of ambiguity in the feature request, please list them here!

> If your implementation involves additional setup to run, please let us know here.

> Any and all feedback on the code challenge is greatly appreciated. Please let us know if it could be improved, if it was too long, if expectations weren't clear, etc.!
