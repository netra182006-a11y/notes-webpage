import Header from "./header.jsx";

function Welcome() {
  return (
    <div id="home">
      <Header />

      <h2>Welcome to Mindly</h2>

      <h3>Your Mind Matters. Your Feelings Matter.</h3>

      <p>
        Mindly is your personal mental wellness space to
        express your thoughts, understand your emotions,
        and take care of your mental well-being.
      </p>

      <h3>About Mindly</h3>

      <p>
        Mindly helps you write your thoughts, track your
        daily moods, and find positivity through motivational
        quotes. Take a moment for yourself and make your
        mental wellness a priority.
      </p>

      <h3>Our Modules</h3>

      <ul>
        <li>Home</li>
        <li>Notes - Write and save your thoughts</li>
        <li>Mood Tracker - Track your daily emotions</li>
        <li>Daily Motivation - Read positive quotes</li>
      </ul>

      <h3>Our Goal</h3>

      <p>
        To create a peaceful digital space that encourages
        self-care, positivity, emotional awareness, and
        personal growth.
      </p>
    </div>
  );
}

export default Welcome;