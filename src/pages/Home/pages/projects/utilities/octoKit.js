import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN
});

export default class OctoKitRest {
    #owner = "AylexCODE";
    #repo = "Other_Projects";

    async getOtherProjectsFiles(){
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

    async getOtherProjectFile(path){
        const result = await octokit.repos.getContent({
            owner: this.#owner,
            repo: this.#repo,
            path
        });
        
        return { content: atob(result?.data?.content), download_url: result?.data?.download_url };
    }
}
