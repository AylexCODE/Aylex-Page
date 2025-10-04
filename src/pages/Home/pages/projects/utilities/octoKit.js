import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN
});

