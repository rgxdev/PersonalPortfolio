import {Octokit} from "@octokit/core";
import {codingHours, githubCommits} from "@/data";


export default async function getStats() {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_AUTH_TOKEN,
        });

        const followers = await octokit.request("/users/rgxdev/followers?per_page=100");
        const followerCount = followers.data.length;

        return {followerCount};
    } catch (error) {
        console.error(error);
        return false;
    }
}

export function getCommits() {
    return githubCommits.reduce((total, commit) => total + commit.count, 0);
}

export function getHours() {
    return codingHours.reduce((total, commit) => total + commit.count, 0);
}