import { useState } from "react";

// Character limit for each platform
const LIMITS = {
  Twitter: 280,
  LinkedIn: 3000,
};

function App() {
  // Both inputs are controlled components: React state is the source of truth
  const [platform, setPlatform] = useState("Twitter");
  const [text, setText] = useState("");

  // Derived values: calculated on every render, so they need no state
  const limit = LIMITS[platform];
  const count = text.length;
  const isOverLimit = count > limit;

  const handlePost = () => {
    alert(`Posted to ${platform}:\n\n${text}`);
    setText("");
  };

  return (
    <div className="container">
      <h1>Post Composer</h1>

      <label htmlFor="platform">Platform</label>
      <select
        id="platform"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        {Object.keys(LIMITS).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <label htmlFor="post">Your post</label>
      <textarea
        id="post"
        rows="8"
        placeholder={`Write your ${platform} post here...`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={isOverLimit ? "invalid" : ""}
      />

      <p className={isOverLimit ? "count over" : "count"}>
        {count} / {limit} characters
      </p>

      {isOverLimit && (
        <p className="error" role="alert">
          Limit exceeded: {platform} allows only {limit} characters. Remove{" "}
          {count - limit} to post.
        </p>
      )}

      <button onClick={handlePost} disabled={isOverLimit || count === 0}>
        Post to {platform}
      </button>
    </div>
  );
}

export default App;
