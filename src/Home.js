
import Feed from './Feed';

const Home = ({ posts }) => {
  const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
   
  };

  const messageStyle = {
    marginTop: '2rem',
    fontSize: '1.5rem',
    color: '#555',
  };

  return (
    <main className="Home" style={homeStyle}>
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={messageStyle}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
