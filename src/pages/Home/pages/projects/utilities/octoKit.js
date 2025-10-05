import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN
});

export default class OctoKitRest {
    #owner = "AylexCODE";
    #repo = "Side_Projects";

    async getSideProjectsFiles(){
        try {
            const ref = await octokit.git.getRef({
                owner: this.#owner,
                repo: this.#repo,
                ref: "heads/main"
            });

            const sha = ref.data?.object?.sha;

            const commit = await octokit.git.getCommit({
                owner: this.#owner,
                repo: this.#repo,
                commit_sha: sha
            });

            const commitSha = commit?.data?.tree.sha;

            const files = await octokit.git.getTree({
                owner: this.#owner,
                repo: this.#repo,
                tree_sha: commitSha
            });

            const filePaths = files?.data?.tree.filter((file) => file.type === "blob").map((file) => file.path).filter((file) => file !== "README.md");

            return filePaths;
        }catch(e){
            return [];
        }
    }

    async getSideProjectFile(path){
        const result = await octokit.repos.getContent({
            owner: this.#owner,
            repo: this.#repo,
            path
        });
        
        return atob(result?.data?.content);
    }
}