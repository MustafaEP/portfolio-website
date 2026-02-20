import { useState, useEffect } from "react";

interface GitHubStats {
  publicRepos: number | null;
  followers: number | null;
  loading: boolean;
  error: boolean;
}

export const useGitHubStats = (username: string): GitHubStats => {
  const [publicRepos, setPublicRepos] = useState<number | null>(null);
  const [followers, setFollowers] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data) => {
        setPublicRepos(data.public_repos ?? null);
        setFollowers(data.followers ?? null);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [username]);

  return { publicRepos, followers, loading, error };
};
