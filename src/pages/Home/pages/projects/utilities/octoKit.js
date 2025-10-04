import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN
});

export default class OctoKitRest {
    async getSideProjectsFiles(){
        try {
            const ref = await octokit.git.getRef({
                owner: "AylexCODE",
                repo: "Side_Projects",
                ref: "heads/main"
            });

            const sha = ref.data?.object?.sha;

            const commit = await octokit.git.getCommit({
                owner: "AylexCODE",
                repo: "Side_Projects",
                commit_sha: sha
            });

            const commitSha = commit?.data?.tree.sha;

            const files = await octokit.git.getTree({
                owner: "AylexCODE",
                repo: "Side_Projects",
                tree_sha: commitSha
            });

            const filePaths = files?.data?.tree.filter((file) => file.type === "blob").map((file) => file.path).filter((file) => file !== "README.md");

            return filePaths;
        }catch(e){
            return [];
        }
    }
}